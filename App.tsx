import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

const isAndroid = Platform.OS == "android";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />

      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text style={styles.text}>Search</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    backgroundColor: "green",
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});
