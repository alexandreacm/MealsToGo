import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../screens/MapScreen";
import { FavoritesContextProvider } from "../services/favorites/favorites.context";
import { LocationContextProvider } from "../services/location/location.context";
import { RestaurantsContextProvider } from "../services/restaurants/restaurants.context";
import { CartContextProvider } from "../services/cart/cart.context";
import { SettingsNavigator } from "./settings-navigator";
import { colors } from "../styles/theme/colors";
import { CheckoutNavigator } from "./checkout.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Checkout: "md-cart",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  // const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ focused, size, color }) => {
      let iconName = focused
        ? TAB_ICON[route.name]
        : `${TAB_ICON[route.name]}-outline`;

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
};

export const AppNavigator = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <CartContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: colors.brand.primary,
              inactiveTintColor: colors.brand.secondary,
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Checkout" component={CheckoutNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </CartContextProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
