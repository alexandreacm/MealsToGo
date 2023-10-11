import React, { useContext } from "react";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/SafeArea";
import { CreditCardInput } from "./components/CreditCardInput";
import { CartContext } from "../../services/cart/cart.context";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);
  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>restaurant: {JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};
