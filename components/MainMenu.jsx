import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import FloorGenerator, { FloorSize } from "../types/FloorGenerator";

export default function MainMenu({ navigation }) {
  let floorGenerator = new FloorGenerator(FloorSize.standard);

  return (
    <View style={styles.container}>
      <Text>dungeons v.0.0.1</Text>
      <Button title="Play" onPress={() => navigation.navigate("Game")} />
      <Button title="Generate Room" onPress={() => floorGenerator.generate()} />
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
