import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/theme";

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
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }

  return null;
}
