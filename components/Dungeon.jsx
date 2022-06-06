import { createRef } from "react";
import { StyleSheet, View } from "react-native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";

import Room from "./Room";
import GameObject from "./GameObject";

export default function Dungeon({ data }) {
  const rooms2d = data.rooms;
  const floorSize = data.floorSize;
  const set = data.set;
  const type = data.type;

  const playerPosition = getRoomPosition(1, 1, 2, 1, 32);
  const zoomableViewRef = createRef();

  return (
    <ReactNativeZoomableView
      contentWidth={4000}
      contentHeight={4000}
      maxZoom={1.6}
      minZoom={0.8}
      ref={zoomableViewRef}
      style={styles.zoomView}
    >
      <View style={styles.container}>
        {rooms2d.map((rooms) =>
          rooms.map(({ floorX, floorY, portalType, uri }) => {
            // x, y for images (use room width for scale)
            const position = convertToIso(floorX, floorY, 256);

            return (
              <Room
                key={`room (${floorX}, ${floorY})`}
                onPress={(rp) =>
                  zoomableViewRef.current.moveTo(rp.x + 297, rp.y + 400)
                }
                position={position}
                uri={uri}
              />
            );
          })
        )}
        <GameObject
          position={playerPosition}
          image={{
            direction: "left_down",
            name: "player",
            set: "default",
            type: "players",
          }}
        />
      </View>
    </ReactNativeZoomableView>
  );
}

function getRoomPosition(roomX, roomY, x, y, scaleInPixels) {
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
  zoomView: {
    flex: 1,
    position: "absolute",
  },
  container: {
    position: "absolute",
  },
});
