import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const CheckoutStack = createStackNavigator();

import { CheckoutScreen } from "../screens/CheckoutScreen";
import { CheckoutErrorScreen } from "../screens/CheckoutErrorScreen";
import { CheckoutSuccessScreen } from "../screens/CheckoutSuccessScreen";

export const CheckoutNavigator = () => (
  <CheckoutStack.Navigator headerMode="none">
    <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
    <CheckoutStack.Screen
      name="CheckoutSuccess"
      component={CheckoutSuccessScreen}
    />
    <CheckoutStack.Screen
      name="CheckoutError"
      component={CheckoutErrorScreen}
    />
  </CheckoutStack.Navigator>
);
