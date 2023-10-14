import React from "react";

import { Text } from "../../components/TypoGraphy";
import { SafeArea } from "../../components/utility/SafeArea";
import { CartIconContainer, CartIcon } from "../CheckoutScreen/styles";
import { colors } from "../../styles/theme/colors";

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" bg={colors.ui.success} />
      <Text variant="label">Success!</Text>
    </CartIconContainer>
  </SafeArea>
);
