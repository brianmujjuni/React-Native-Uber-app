import { calculateRegion } from "@/lib/map";
import { useLocationStore } from "@/store";
import React from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();
  const region = calculateRegion({
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  });
  return (
    <MapView
      className="rounded-2xl"
      provider={PROVIDER_DEFAULT}
      style={{ flex: 1 }} // this ensures it fills available space
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    />
  );
};
export default Map;
