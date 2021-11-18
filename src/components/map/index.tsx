import { useState, useCallback, useRef, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useRestaurants } from "../../providers/restaurants";
import Search from "../search";
import Locate from "../locate";
import { Container } from "./style";
import MapRoutes from "../mapRoutes";
import { LocationData } from "../../types";
import SearchResults from "../searchResults";
import RestaurantCard from "../restaurantCard";

const Map = () => {
  const containerStyle = { width: "100%", height: "100%" };
  const [center, setCenter] = useState({ lat: -23.5549, lng: -46.63864 });
  const [goal, setGoal] = useState({
    lat: -23.561747395413516,
    lng: -46.681951593872625,
  });
  const [showRoute, setShowRoute] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
  });
  const { restaurants } = useRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([
    ...restaurants,
  ]);
  const showRestaurants = (input = "") => {
    const loweredInput = input.toLowerCase();
    setFilteredRestaurants(
      restaurants?.filter(({ name }) =>
        name.toLowerCase().includes(loweredInput)
      )
    );
  };

  const setRoute = (location: LocationData) => {
    setGoal(location);
    setShowRoute(true);
  };

  const geoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null
    );
  };

  useEffect(() => {
    geoLocation();
  }, []);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    showRestaurants(searchValue);
  }, [restaurants]);

  const mapRef: any = useRef(null);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback((map) => {
    mapRef.current = null;
  }, []);

  const handleMarkerClick = (restaurantName: string) => {
    setSearchValue(restaurantName);
    showRestaurants(restaurantName);
  };

  return (
    <Container>
      <Search
        showRestaurants={showRestaurants}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <Locate panTo={panTo} center={center} />
      {isLoaded ? (
        <GoogleMap
          center={center}
          mapContainerStyle={containerStyle}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={(e) => console.log(e)}
          options={{
            disableDefaultUI: true,
            mapId: "d9cda9dd42bdaabd",
          }}
        >
          {filteredRestaurants.map((restaurant) => (
            <Marker
              key={restaurant.id}
              position={{
                lat: restaurant.location.lat,
                lng: restaurant.location.lng,
              }}
              icon={{
                url: "/foodMarker.png",
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              onClick={() => handleMarkerClick(restaurant.name)}
            />
          ))}
          <Marker
            position={center}
            icon={{
              url: "/userIcon.png",
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
          {showRoute && <MapRoutes center={center} goal={goal} />}
        </GoogleMap>
      ) : (
        <></>
      )}
      {searchValue && (
        <SearchResults>
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                setRoute={setRoute}
                restaurant={restaurant}
                panTo={panTo}
              />
            ))
          ) : (
            <p>Nenhum restaurante encontrado</p>
          )}
        </SearchResults>
      )}
    </Container>
  );
};

export default Map;
