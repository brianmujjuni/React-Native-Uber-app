import { Ride } from "@/types/type";
import React from "react";
import { Text, View } from "react-native";

function RideCard({ ride:{
    destination_longitude,
    destination_latitude,
    origin_address,
    destination_address,
    created_at,
    ride_time,
    driver,
    payment_status
} }: { ride: Ride }) {
  return (
    <View>
      <Text className="text-3xl">{driver.first_name}</Text>
    </View>
  );
}

export default RideCard;
