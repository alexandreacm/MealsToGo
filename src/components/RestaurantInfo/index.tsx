import React from "react";
import styled, { css } from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../Spacer";

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

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  justify-content: space-between;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledSpacer = styled.View`
  ${({ theme, isLarge }) => css`
    padding-left: ${isLarge ? theme.space[3] : theme.space[1]};
  `}
`;

export function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name,
    photos,
    address,
    rating,
    isClosedTemporarily,
    isOpenNow,
    icon,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((item, idx) => (
              <SvgXml key={idx} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            {/* <View style={{ paddingLeft: 16 }} /> */}
            {/* <StyledSpacer isLarge /> */}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

            {/* <StyledSpacer isLarge /> */}
            {/* <View style={{ paddingLeft: 16 }} /> */}
            <Spacer position="left" size="large" />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}

// const styles = StyleSheet.create({
//   card: { backgroundColor: "white" },
//   cover: { padding: 20, backgroundColor: "white" },
// });
