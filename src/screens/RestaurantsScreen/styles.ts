import styled from "styled-components/native";
import { FlatList } from "react-native";
import { colors } from "../../styles/theme/colors";
import { Button } from "react-native-paper";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;
