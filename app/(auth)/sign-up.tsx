import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import CustomButon from "@/components/customButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";

const SignUp = () => {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });
  // const [pendingVerification, setPendingVerification] = useState(false);
  // const [code, setCode] = useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerification({ ...verification, state: "pending" });
    } catch (err) {
      console.error("SignUp Error:", JSON.stringify(err, null, 2));
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        //Create a databse user here
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({ ...verification, state: "success" });
        router.replace("/");
      } else {
        setVerification({
          ...verification,
          state: "failed",
          error: "Verification failed",
        });
        console.warn("Verification not complete:", completeSignUp);
      }
    } catch (err) {
      let errorMessage = "Verification failed";
      if (
        typeof err === "object" &&
        err !== null &&
        "errors" in err &&
        Array.isArray((err as any).errors) &&
        (err as any).errors[0]?.logMessage
      ) {
        errorMessage = (err as any).errors[0].logMessage;
      }
      setVerification({
        ...verification,
        state: "failed",
        error: errorMessage,
      });
      console.error("Verification Error:", JSON.stringify(err, null, 2));
    }
  };

  // Sign-up Form Screen
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1">
        <View className="relative w-full h-[250px]">
          <Image
            source={images.signUpCar}
            className="w-full h-[250px] z-0"
            resizeMode="cover"
          />
          <Text className="text-black text-2xl absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.person}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButon
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />

          <OAuth />

          <Link
            href="/(auth)/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
