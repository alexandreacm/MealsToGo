import React, { useContext } from "react";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/SafeArea";
import { CreditCardInput } from "./components/CreditCardInput";
import { CartContext } from "../../services/cart/cart.context";
import { CartIcon, CartIconContainer } from "./styles";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>restaurant: {JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};
