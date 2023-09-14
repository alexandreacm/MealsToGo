import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";

// type Props = {
//   name: string;
//   icon: string;
//   photos: [];
//   address: string;
//   isOpenNow: boolean;
//   rating: number;
//   isClosedTemporarily: boolean;
// };

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export function RestaurantInfoCard({ restaurant = {} }) {
  const { name, photos } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}

// const styles = StyleSheet.create({
//   card: { backgroundColor: "white" },
//   cover: { padding: 20, backgroundColor: "white" },
// });
