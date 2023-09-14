import * as React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";

import { RestaurantInfoCard } from "../../components/RestaurantInfo";

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
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar onChangeText={setSearchQuery} value={searchQuery} />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard restaurant={mockData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e7e8ea",
  },
});
