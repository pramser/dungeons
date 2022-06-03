import { useState } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";
import { images } from "../types/Images";
import Tile from "./Tile";

export default function Dungeon(props) {
  const [rooms2d, setRooms] = useState(props.data.rooms);
  const set = props.data.set;
  const type = props.data.type;

  return (
    <ReactNativeZoomableView
      contentWidth={1024}
      contentHeight={768}
      maxZoom={1.2}
      minZoom={0.8}
      style={styles.zoomView}
    >
      <View style={styles.container}>
        {rooms2d.map((rooms) =>
          rooms.map(({ floorX, floorY, tiles }) =>
            tiles.map((tile, t) => {
              // calculate x, y with room offset
              let relativeX = tile.x + floorX * 4;
              let relativeY = tile.y + floorY * 4;

              // x, y for images
              const position = convertToIso(relativeX, relativeY);

              return (
                <Tile
                  position={position}
                  image={{ name: tile.name, set, type }}
                />
              );
            })
          )
        )}
      </View>
    </ReactNativeZoomableView>
  );
}

function convertToIso(x, y) {
  const WIDTH = 64;
  const HEIGHT = 64;

  return {
    x: x * 1 * 0.5 * WIDTH + y * -1 * 0.5 * WIDTH,
    y: x * 0.5 * 0.5 * HEIGHT + y * 0.5 * 0.5 * HEIGHT,
  };
}

const styles = StyleSheet.create({
  zoomView: {
    flex: 1,
  },
  container: {
    top: 10,
    position: "absolute",
  },
});
