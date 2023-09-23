import { useState, useEffect } from "react";
import * as Font from "expo-font";

export default function useLoadingFonts() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (error) {
        console.log("error ", error);
      } finally {
        setIsFontLoaded(true);
      }
    }

    loadFonts();
  }, []);

  return isFontLoaded;
}
