import React from "react";
import { Text, TouchableOpacity } from "react-native";

function CustomButon({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}) {
  return <TouchableOpacity onPress={onPress}>
    {IconLeft && <IconLeft />}
    <Text>{title}</Text>
    {IconRight && <IconRight/>}
  </TouchableOpacity>;
}

export default CustomButon;
