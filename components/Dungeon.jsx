import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";

export default function Dungeon(props) {
  const [tiles, setTiles] = useState(props.data.tiles);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {tiles.map((tile) => {
          const { x, y } = convertToIso(tile.x, tile.y);
          const key = `${tile.name} x:${x}, y: ${y}`;
          return (
            <TouchableHighlight
              key={key}
              onPress={() =>
                setTiles(tiles.filter((t) => t.getId() !== tile.getId()))
              }
            >
              <Image
                key={key}
                source={require("../assets/worlds/default/tiles/dungeon/ground.png")}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                }}
              />
            </TouchableHighlight>
          );
        })}
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
