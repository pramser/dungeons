import { useState } from "react";
import { Image, TouchableHighlight } from "react-native";
import { objects } from "../assets";

export default function GameObject(props) {
  const { x, y } = props.position;
  const { direction, name, set, type } = props.image;

  const [isTouched, setIsTouched] = useState(false);

  const style = {
    position: "absolute",
    left: x,
    top: y - 6,
  };

  return (
    <TouchableHighlight
      key={`touch (${x}, ${y})`}
      onPress={() => setIsTouched(!isTouched)}
    >
      <Image
        key={`object (${x}, ${y})`}
        source={objects[set][type][name][direction].uri}
        style={style}
      />
    </TouchableHighlight>
  );
}
