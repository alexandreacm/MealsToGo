import React from "react";
import { useTheme } from "styled-components/native";
import { SafeArea } from "../../components/utility/SafeArea";
import { CartIconContainer, CartIcon } from "../CheckoutScreen/styles";
import { Text } from "../../components/TypoGraphy";

type RoutParams = {
  route: {
    params: {
      error: string;
    };
  };
};
export const CheckoutErrorScreen = ({ route }: RoutParams) => {
  const { colors } = useTheme();
  const { error = "" } = route.params;

  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
