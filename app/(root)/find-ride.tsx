import RideLayout from "@/components/RideLayout";
import { useLocationStore } from "@/store";
import React from "react";
import { Text, View } from "react-native";

function FindRide() {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();
  return (
    <RideLayout>
      <View>
        <Text>Find Ride</Text>
      </View>
    </RideLayout>
  );
}

export default FindRide;
