import CustomButon from "@/components/customButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";


const SignIn = () => {
   const { signIn, setActive, isLoaded } = useSignIn()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
 const onSignInPress = useCallback(async () => {
    if (!isLoaded) return

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      })

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace("/(root)/(tabs)/home")
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }, [isLoaded, signIn, setActive, form.email, form.password])

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="w-full z-0 h-[250px]" />
          <Text className="text-black text-2xl absolute bottom-5 left-5">
            {" "}
            Welcome
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
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />
          {/* OAuth */}
          <OAuth />
          <Link
            href="/(auth)/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text className="">Don't have an account </Text>
            <Text className="text-primary-500 ">Sign In</Text>
          </Link>

          {/* Verification Modal */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
