import React from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
    const region ={}
  return (
    <MapView
    className="rounded-2xl"
      provider={PROVIDER_DEFAULT}
      style={{ flex: 1 }} // this ensures it fills available space
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      showsUserLocation={true}
      userInterfaceStyle="light"
    />
  );
};
export default Map;
