import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { Text } from "../../components/TypoGraphy";
import { Spacer } from "../../components/Spacer";
import { SafeArea } from "../../components/utility/SafeArea";

import { CartContext } from "../../services/cart/cart.context";
import { CreditCardInput } from "./components/CreditCardInput";

import {
  CartIcon,
  CartIconContainer,
  NameInput,
  PayButton,
  ClearButton,
} from "./styles";
import { RestaurantInfoCard } from "../../components/RestaurantInfoCard";

export const CheckoutScreen = () => {
  const { cart, restaurant, clearCart, sum } = useContext(CartContext);
  const [name, setName] = useState("");

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
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput label="Name" value={name} onChangeText={setName} />

        <Spacer position="top" size="large">
          {name.length > 0 && <CreditCardInput name={name} />}
        </Spacer>
        <Spacer position="top" size="xxl" />

        <PayButton
          icon="cash"
          mode="contained"
          onPress={() => {
            console.log("pay now");
          }}
        >
          Pay
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
