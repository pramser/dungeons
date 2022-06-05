import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";

import Room from "./Room";

export default function Dungeon(props) {
  const [rooms2d, setRooms] = useState(props.data.rooms);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  const floorSize = props.data.floorSize;
  const set = props.data.set;
  const type = props.data.type;

  return (
    <ReactNativeZoomableView
      contentWidth={4000}
      contentHeight={4000}
      maxZoom={1.2}
      minZoom={0.8}
      style={styles.zoomView}
    >
      <View style={styles.container}>
        {rooms2d.map((rooms) =>
          rooms.map(({ floorX, floorY, portalType, uri }) => {
            // calculate x, y with room offset (original, individual object position)
            // let relativeX = tile.x + floorX * floorSize;
            // let relativeY = tile.y + floorY * floorSize;

            // x, y for images (use room width for scale)
            const position = convertToIso(floorX, floorY, 256);

            return (
              <Room
                key={`room (${floorX}, ${floorY})`}
                position={position}
                uri={uri}
                onPress={(pos) => setPlayerPosition({ x: pos.x, y: pos.y })}
              />
            );
          })
        )}
      </View>
    </ReactNativeZoomableView>
  );
}

// function convertToIso(x, y, ) {
//   const TILE_WIDTH = 64;
//   const TILE_HEIGHT = 64;

//   return {
//     x: x * 1 * 0.5 * TILE_WIDTH + y * -1 * 0.5 * TILE_WIDTH,
//     y: x * 0.5 * 0.5 * TILE_HEIGHT + y * 0.5 * 0.5 * TILE_HEIGHT,
//   };
// }

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
  zoomView: {
    flex: 1,
  },
  container: {
    top: 10,
    position: "absolute",
  },
  player: {
    position: "absolute",
    top: 10,
    zIndex: 100,
  },
});
