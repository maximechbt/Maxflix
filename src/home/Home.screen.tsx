import { StyleSheet, Text, View } from "react-native";

import { RootTabScreenProps } from "../../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
