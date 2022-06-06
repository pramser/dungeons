import { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { ui } from "../assets";

export default function GameObject(props) {
  const { x, y } = props.position;
  const { name, set, type } = props.image;
  const isHidden = props.isHidden;

  const [isTouched, setIsTouched] = useState(false);

  const style = {
    position: "absolute",
    left: x,
    top: y + 14,
    zIndex: 150,
  };

  if (isHidden) {
    return null;
  }

  return (
    <TouchableOpacity
      key={`touch (${x}, ${y})`}
      onPress={() => setIsTouched(!isTouched)}
    >
      <Image
        key={`object (${x}, ${y})`}
        source={ui.default[isTouched ? "selected" : "highlighted"].uri}
        style={style}
      />
    </TouchableOpacity>
  );
}
