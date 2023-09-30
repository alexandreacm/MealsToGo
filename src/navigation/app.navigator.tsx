import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";

import { SafeArea } from "../utility/SafeArea";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../screens/MapScreen";
import { AuthenticationContext } from "../services/authentication/authentication.context";
import { FavoritesContextProvider } from "../services/favorites/favorites.context";
import { LocationContextProvider } from "../services/location/location.context";
import { RestaurantsContextProvider } from "../services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
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
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
