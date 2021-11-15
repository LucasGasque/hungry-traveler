import { useState, useCallback, useRef, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRestaurants } from "../../providers/restaurants";
import Search from "../search";
import Locate from "../locate";
import { Container } from "./style";

const libraries = ["places"];

interface MapProps {}

const Map = () => {
  const containerStyle = { width: "100%", height: "100vh" };
  const [center, setCenter] = useState({ lat: -23.5549, lng: -46.63864 });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
    // libraries: libraries,
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
    mapRef.current.setZoom(20);
  }, []);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback((map) => {
    mapRef.current = null;
  }, []);

  return (
    <Container>
      <Search
        showRestaurants={showRestaurants}
        setSearchValue={setSearchValue}
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
        >
          {filteredRestaurants.map((restaurant) => (
            <Marker
              key={restaurant.id}
              position={{
                lat: restaurant.location.lat,
                lng: restaurant.location.lng,
              }}
              label={restaurant.name}
            />
          ))}
          <Marker
            position={{
              lat: -23.5549,
              lng: -46.63864,
            }}
            label="User"
          ></Marker>
        </GoogleMap>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Map;
