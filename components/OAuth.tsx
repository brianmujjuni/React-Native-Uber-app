import { icons } from "@/constants";
import React from "react";
import { Image, Text, View } from "react-native";
import CustomButon from "./customButton";

function OAuth() {
    const handleGoogleLogin =async () => {

    }
  return (
    <>
      <View className="felx flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>
      <CustomButon
        title="Log In With Google"
        className="mt-5 shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleLogin}
      />
    </>
  );
}

export default OAuth;
