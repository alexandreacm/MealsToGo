import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/screens/RestaurantsScreen";
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

export default function App() {
  const [isOswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_700Bold,
  });
  const [isLatoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (isOswaldLoaded || isLatoLoaded) {
    return (
      <>
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }

  return null;
}
