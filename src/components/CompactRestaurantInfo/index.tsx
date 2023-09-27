import * as React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";

import { Text } from "../../components/TypoGraphy";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const ViewItem = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <ViewItem>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </ViewItem>
  );
};
