import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView } from "react-native";
import styled, { css } from "styled-components/native";

import { RestaurantInfoCard } from "../../components/RestaurantInfo";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  ${({ theme }) => css`
    background-color: ${theme.colors.bg.primary};
  `}
`;

export function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const mockData = {
    name: "Some Restaurant",
    icon: "",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
  };

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar onChangeText={setSearchQuery} value={searchQuery} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard restaurant={mockData} />
      </RestaurantListContainer>
    </SafeArea>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {
//     padding: 16,
//   },
//   list: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#e7e8ea",
//   },
// });
