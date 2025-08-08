import { GoogleInputProps } from "@/types/type";
import React from "react";
import { Text, View } from "react-native";
function GoogleTextInput({
  icon,
  containerStyle,
  initialLocation,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl mb-5 ${containerStyle}`}
    >
      <Text>Search</Text>
    </View>
  );
}

export default GoogleTextInput;
