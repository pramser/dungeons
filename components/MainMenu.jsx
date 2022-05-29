import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function MainMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>dungeons v.0.0.1</Text>
      <Button title="Play" onPress={() => navigation.navigate("Game")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
