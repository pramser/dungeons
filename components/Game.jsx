import { createRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";

import Room from "./Room";
import Player from "./Player";
import MovementTiles from "./MovementTiles";

import { FloorSize, RoomSize } from "../types/DungeonEssentials";
import GameManager from "../types/GameManager";

let gameManager = new GameManager(
  FloorSize.small,
  RoomSize.normal,
  "default",
  "dungeon"
);

let { entRoom, players, rooms2d, set } = gameManager.createGame();

export default function Game() {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [isPlayerMoving, setIsPlayerMoving] = useState(false);
  const [pPos, setPlayerPos] = useState({
    x: 3,
    y: 1,
    roomX: entRoom.x,
    roomY: entRoom.y,
  });
  const zoomableViewRef = createRef();

  return (
    <View style={styles.game}>
      <ReactNativeZoomableView
        contentWidth={4000}
        contentHeight={4000}
        initialZoom={1}
        maxZoom={2}
        minZoom={1}
        ref={zoomableViewRef}
        style={styles.zoomView}
      >
        <View style={styles.dungeon}>
          {rooms2d.map((rooms) =>
            rooms.map((room) => (
              <Room
                room={room}
                onPress={(rp) =>
                  zoomableViewRef.current.moveTo(rp.x + 320, rp.y + 350)
                }
              />
            ))
          )}
          <MovementTiles
            position={pPos}
            amount={1}
            isHidden={!isPlayerMoving}
            onPress={(pos) => setPlayerPos(pos)}
          />
          <Player position={pPos} name="player" />
        </View>
      </ReactNativeZoomableView>
      <Text style={styles.turns}>{players[currentTurn].charName}</Text>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setIsPlayerMoving(!isPlayerMoving)}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dungeon: {
    position: "absolute",
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
  game: {
    flex: 1,
    backgroundColor: "#333",
  },
  turns: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "white",
  },
  zoomView: {
    flex: 1,
    position: "absolute",
  },
});
