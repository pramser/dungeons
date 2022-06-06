import { useState } from "react";
import { Image, TouchableHighlight } from "react-native";
import { people } from "../assets";

export default function Player(props) {
  const { x, y } = props.position;
  const { direction, name, set } = props.image;

  const [isTouched, setIsTouched] = useState(false);

  const style = {
    position: "absolute",
    left: x,
    top: y - 6,
    zIndex: 100,
  };

  return (
    <TouchableHighlight
      key={`touch (${x}, ${y})`}
      onPress={() => setIsTouched(!isTouched)}
    >
      <Image
        key={`player (${x}, ${y})`}
        source={people[set][name][direction].uri}
        style={style}
      />
    </TouchableHighlight>
  );
}
