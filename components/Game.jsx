import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Dungeon from "./Dungeon";
import { FloorSize, RoomSize } from "../types/FloorGenerator";
import GameManager from "../types/GameManager";

export default function Game() {
  let gameManager = new GameManager(
    FloorSize.small,
    RoomSize.normal,
    "default",
    "dungeon"
  );

  var data = gameManager.createGame();

  return (
    <View style={styles.container}>
      <Dungeon data={data} />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => console.log("hello, world")}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4277AD",
    position: "absolute",
    bottom: 15,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButtonText: {
    marginTop: -5,
    fontSize: 40,
    color: "white",
  },
});
