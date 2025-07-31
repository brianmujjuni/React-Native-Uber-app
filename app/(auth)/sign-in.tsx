import CustomButon from "@/components/customButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignIn = () => {
  const [form, setForm] = useState({
      
      email: "",
      password: "",
    });
    const onLoginPress = async () => {
    };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-yellow">
        <View className="relative w-full h-[250px]">
          <Image src={images.signUpCar} className="w-full z-0 h-[250px]" />
          <Text className="text-black text-2xl absolute bottom-5 left-5">
            {" "}
            Login Your Account
          </Text>
        </View>
        <View className="p-5">
         
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.person}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButon
            title="Sign Up"
            onPress={onLoginPress}
            className="mt-6"
          />
          {/* OAuth */}
          <OAuth/>
          <Link href="/(auth)/sign-in" className="text-lg text-center text-general-200 mt-10">
            <Text className="">Already have an account {" "}</Text>
            <Text className="text-primary-500 ">Log In</Text>
          </Link>

          {/* Verification Modal */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
