import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Dungeon from "./Dungeon";
import { Tile } from "../types/Tile";

export default function Game() {
  var data = {
    set: "default",
    type: "dungeon",
    tiles: [
      new Tile("ground", 1, 1),
      new Tile("ground", 2, 1),
      new Tile("ground", 3, 1),
      new Tile("ground", 4, 1),
      new Tile("ground", 1, 2),
      new Tile("ground", 2, 2),
      new Tile("ground", 3, 2),
      new Tile("ground", 4, 2),
      new Tile("ground", 2, 3),
      new Tile("ground", 3, 3),
      new Tile("ground", 3, 4),
      new Tile("ground", 4, 4),
    ],
  };

  return (
    <View style={styles.container}>
      <Dungeon data={data} />
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
