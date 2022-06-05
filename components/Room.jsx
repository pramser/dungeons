import { useState } from "react";
import { Image, TouchableHighlight } from "react-native";

export default function Room(props) {
  const { x, y } = props.position;
  const uri = props.uri;

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
      <Image key={`image (${x}, ${y})`} source={uri} style={style} />
    </TouchableHighlight>
  );
}
