import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Dungeon from "./Dungeon";
import { Tile } from "../types/RoomEssentials";
import FloorGenerator, { FloorSize } from "../types/FloorGenerator";

export default function Game() {
  let floorGenerator = new FloorGenerator(FloorSize.standard);
  let rooms = floorGenerator.generate();

  let message = "\n";

  // rooms
  for (var yRoom = 0; yRoom < rooms.length; yRoom++) {
    for (var xRoom = 0; xRoom < rooms[yRoom].length; xRoom++) {
      message += rooms[yRoom][xRoom].layout || "0";

      if (xRoom === 3) {
        message += "\n";
      }
    }
  }

  console.log(message);

  var data = {
    set: "default",
    type: "dungeon",
    tiles: [new Tile("ground", 1, 1)],
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
