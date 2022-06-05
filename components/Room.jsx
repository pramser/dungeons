import { Image, TouchableOpacity } from "react-native";

export default function Room({ onPress, position, uri }) {
  const { x, y } = position;

  const style = {
    position: "absolute",
    left: x,
    top: y,
  };

  return (
    <TouchableOpacity onPress={() => onPress(position)}>
      <Image key={`image (${x}, ${y})`} source={uri} style={style} />
    </TouchableOpacity>
  );
}
