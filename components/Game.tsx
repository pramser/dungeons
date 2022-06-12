import { createRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";

import Room from "./Room";
import Player from "./Player";
import SelectionTiles from "./SelectionTiles";

import { FloorSize, RoomSize } from "../types/DungeonEssentials";
import GameManager from "../types/GameManager";

let gameManager = new GameManager(FloorSize.small, RoomSize.normal);
let rooms2d = gameManager.createGame();

export default function Game() {
  const [isPlayerMoving, setIsPlayerMoving] = useState(false);
  const zoomableViewRef: any = createRef();

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
                key={room.describe()}
                room={room}
                onPress={(rp) =>
                  zoomableViewRef.current.moveTo(rp.x + 320, rp.y + 350)
                }
              />
            ))
          )}
          <SelectionTiles
            position={gameManager.activePlayer().position}
            range={1}
            isHidden={!isPlayerMoving}
            onPress={(pos) => {
              gameManager.moveActivePlayer(pos);
              setIsPlayerMoving(false);
              gameManager.nextTurn();
            }}
          />
          <Player player={gameManager.players[0]} />
          <Player player={gameManager.players[1]} />
        </View>
      </ReactNativeZoomableView>
      <Text style={styles.turns}>{gameManager.activePlayer().charName}</Text>
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
