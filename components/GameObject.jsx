import { useState } from "react";
import { Image, TouchableOpacity } from "react-native";

export default function GameObject(props) {
  const { x, y } = props.position;
  const imageUri = props.imageUri;
  const isHidden = props.isHidden;
  const onPress = props.onPress;

  const style = {
    position: "absolute",
    left: x,
    top: y + 14,
    zIndex: 50,
  };

  if (isHidden) {
    return null;
  }

  return (
    <TouchableOpacity
      key={`touch (${x}, ${y})`}
      onPress={() => onPress({ x, y })}
    >
      <Image key={`object (${x}, ${y})`} source={imageUri} style={style} />
    </TouchableOpacity>
  );
}
