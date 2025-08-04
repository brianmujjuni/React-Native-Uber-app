import { Ride } from "@/types/type";
import React from "react";
import { Text, View } from "react-native";

function RideCard({ ride }: { ride: Ride }) {
  return (
    <View>
      <Text className="text-3xl">{ride.driver.first_name}</Text>
    </View>
  );
}

export default RideCard;
