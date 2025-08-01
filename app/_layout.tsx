import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "react-native-reanimated";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY; // Replace with your actual publishable key


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    useEffect(() => {
    const prepare = async () => {
      // Do your loading tasks here (e.g., fetch user, load fonts, etc.)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await SplashScreen.hideAsync(); // hide splash when ready
    };

    prepare();
  }, []);
  const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  if (!publishableKey) {
    throw new Error(
      "Clerk publishable key is not defined. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your environment variables."
    );
  }
  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        {/* <Slot /> */}

        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
