import { createRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";

import GameManager from "../types/GameManager";
import { FloorSize, RoomSize } from "../types/DungeonEssentials";

import Room from "./Room";
import Player from "./Player";
import SelectionTiles from "./SelectionTiles";
import SimpleActionBar from "./SimpleActionBar";
import TurnOrderPanel from "./TurnOrderPanel";

let gameManager = new GameManager(FloorSize.small, RoomSize.normal);
let rooms2d = gameManager.createGame();

export default function Game() {
  const [playerAction, setPlayerAction] = useState<string | null>(null);
  const zoomableViewRef: any = createRef();

  let activePlayer = gameManager.activePlayer();
  let collision = gameManager.collision();

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
            collision={collision}
            range={2}
            isHidden={!playerAction}
            mode={playerAction}
            onPress={(pos) => {
              gameManager.moveActivePlayer(pos);
              setPlayerAction(null);
              gameManager.nextTurn();
            }}
          />
          {gameManager.players.map((player) => (
            <Player key={player.describe()} player={player} />
          ))}
        </View>
      </ReactNativeZoomableView>
      <TurnOrderPanel activePlayer={activePlayer} />
      <SimpleActionBar
        onPressMove={() => setPlayerAction(!playerAction ? "def" : null)}
        onPressAttack={() => setPlayerAction(!playerAction ? "atk" : null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dungeon: {
    position: "absolute",
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
