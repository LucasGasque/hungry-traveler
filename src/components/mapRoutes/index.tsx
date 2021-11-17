import { useState } from "react";
import { DirectionsRenderer } from "@react-google-maps/api";
import { LocationData } from "../../types";

interface MapRoutesProps {
  center: LocationData;
  goal: LocationData;
}

const MapRoutes = ({ center, goal }: MapRoutesProps) => {
  const [directions, setDirections] = useState<any>();

  const origin = center;
  const destination = goal;

  const directionsService = new google.maps.DirectionsService();
  directionsService.route(
    {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode["DRIVING"],
      waypoints: [
        { location: new google.maps.LatLng(origin.lat, origin.lng) },
        { location: new google.maps.LatLng(destination.lat, destination.lng) },
      ],
    },
    (result, status) => {
      console.log(result);
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        console.log(result);
      }
    }
  );

  return <DirectionsRenderer directions={directions} />;
};

export default MapRoutes;
