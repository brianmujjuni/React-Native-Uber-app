import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-yellow">
        <View className="relative w-full h-[250px]">
          <Image src={images.signUpCar} className="w-full z-0 h-[250px]" />
          <Text className="text-black text-2xl absolute bottom-5 left-5">
            {" "}
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value)=>setForm({...form,name: value})}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
