import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";

export default function Dungeon(props) {
  const [rooms2d, setRooms] = useState(props.data.rooms);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {rooms2d.map((rooms) =>
          rooms.map(({ floorX, floorY, tiles }) =>
            tiles.map((tile, t) => {
              // calculate x, y with room offset
              let relativeX = tile.x * (floorX + 1);
              let relativeY = tile.y * (floorY + 1);

              // x, y for images
              const { x, y } = convertToIso(relativeX, relativeY);
              return (
                <TouchableHighlight
                  key={`touch-${t} (${x}, ${y})`}
                  onPress={() => console.log("touched")}
                >
                  <Image
                    key={`tile-${t} (${x}, ${y})`}
                    source={require("../assets/worlds/default/tiles/dungeon/ground.png")}
                    style={{
                      position: "absolute",
                      left: x,
                      top: y,
                    }}
                  />
                </TouchableHighlight>
              );
            })
          )
        )}
      </View>
    </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "absolute",
    left: 160,
  },
});
