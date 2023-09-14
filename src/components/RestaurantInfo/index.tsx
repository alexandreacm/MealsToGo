import React from "react";
import styled from "styled-components/native";
// import { StyleSheet } from "react-native";
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

const MainCard = styled(Card)`
  background-color: #ffffff;
`;

const CardCOver = styled(Card.Cover)`
  padding: 20px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  padding: 16px;
  color: #ff0000;
`;

export function RestaurantInfoCard({ restaurant = {} }) {
  const { name, photos } = restaurant;

  return (
    <MainCard elevation={5}>
      <CardCOver key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </MainCard>
  );
}

// const styles = StyleSheet.create({
//   card: { backgroundColor: "white" },
//   cover: { padding: 20, backgroundColor: "white" },
// });
