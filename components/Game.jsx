import { createRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";

import Room from "./Room";
import Player from "./Player";

import { FloorSize, RoomSize } from "../types/DungeonEssentials";
import GameManager from "../types/GameManager";
import MovementTiles from "./MovementTiles";

let gameManager = new GameManager(
  FloorSize.small,
  RoomSize.normal,
  "default",
  "dungeon"
);

let { entRoom, rooms2d, set } = gameManager.createGame();

export default function Game() {
  const [isPlayerMoving, setIsPlayerMoving] = useState(0);
  const [pPos, setPlayerPos] = useState(
    getRoomPos(entRoom.x, entRoom.y, 3, 1, 32)
  );
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
            rooms.map(({ floorX, floorY, uri }) => {
              // x, y for images (use room width for scale)
              const position = convertToIso(floorX, floorY, 256);

              return (
                <Room
                  key={`room (${floorX}, ${floorY})`}
                  onPress={(rp) =>
                    zoomableViewRef.current.moveTo(rp.x + 320, rp.y + 350)
                  }
                  position={position}
                  uri={uri}
                />
              );
            })
          )}
          <MovementTiles
            position={pPos}
            amount={2}
            isHidden={!isPlayerMoving}
            onPress={(pos) => setPlayerPos(pos)}
          />
          <Player
            position={pPos}
            image={{
              direction: "ld",
              name: "player",
              set,
            }}
          />
        </View>
      </ReactNativeZoomableView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setIsPlayerMoving(!isPlayerMoving)}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

function getRoomPos(roomX, roomY, x, y, scaleInPixels) {
  const offsetX = -2;
  const offsetY = 5;
  const floorSize = 8;

  // calculate x, y with room offset
  const relativeX = x + roomX * floorSize - offsetX;
  const relativeY = y + roomY * floorSize - offsetY;

  return convertToIso(relativeX, relativeY, scaleInPixels);
}

function convertToIso(x, y, scaleInPixels) {
  // Only supports squares right now
  const WIDTH = scaleInPixels;
  const HEIGHT = WIDTH;

  return {
    x: x * 1 * 0.5 * WIDTH + y * -1 * 0.5 * WIDTH,
    y: x * 0.5 * 0.5 * HEIGHT + y * 0.5 * 0.5 * HEIGHT,
  };
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
  zoomView: {
    flex: 1,
    position: "absolute",
  },
});
