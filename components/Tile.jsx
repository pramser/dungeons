import { useState } from "react";
import { Image, TouchableHighlight } from "react-native";
import { tiles } from "../assets";

export default function Tile(props) {
  const { x, y } = props.position;
  const { name, set, type } = props.image;

  const onPress = props.onPress;

  const [isTouched, setIsTouched] = useState(false);

  const style = {
    position: "absolute",
    left: x,
    top: y,
  };

  return (
    <TouchableHighlight
      key={`touch (${x}, ${y})`}
      onPress={() => onPress(props.position)}
    >
      <Image
        key={`image (${x}, ${y})`}
        source={tiles[set][type][isTouched ? "highlight" : name].uri}
        style={style}
      />
    </TouchableHighlight>
  );
}
