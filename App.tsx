import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/theme";
import { initializeApp, getApps } from "firebase/app";
// import {
//   initializeAuth,
//   signInWithEmailAndPassword,
//   getReactNativePersistence,
// } from "firebase/auth";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
// import useLoadingFonts from "./src/hooks/useLoadingFonts";

import { Navigation } from "./src/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBO1f2LnbzE_6AFyLQS3cdb9_PfHVYktu0",
  authDomain: "mealstogo-92344.firebaseapp.com",
  projectId: "mealstogo-92344",
  storageBucket: "mealstogo-92344.appspot.com",
  messagingSenderId: "482795193523",
  appId: "1:482795193523:web:12693f9c91d6557f1a9cc6",
};

// let auth: any = null;

//firebase.apps.length
if (!getApps().length) {
  initializeApp(firebaseConfig);
  // auth = initializeAuth(app, {
  //   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  // });
}

export default function App() {
  // const isLoaded = useLoadingFonts();
  const [isOswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_700Bold,
  });

  const [isLatoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (isOswaldLoaded && isLatoLoaded) {
    return (
      <>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <FavoritesContextProvider>
              <LocationContextProvider>
                <RestaurantsContextProvider>
                  <Navigation />
                </RestaurantsContextProvider>
              </LocationContextProvider>
            </FavoritesContextProvider>
          </AuthenticationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }

  return null;
}
