import { Image, TouchableOpacity } from "react-native";
import Math from "../types/Math";

export default function GameObject({ imageUri, isHidden, onPress, position }) {
  let { x, y } = Math.getRoomPos(
    position.x,
    position.y,
    position.roomX,
    position.roomY,
    32
  );

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
      onPress={() => onPress(position)}
    >
      <Image key={`object (${x}, ${y})`} source={imageUri} style={style} />
    </TouchableOpacity>
  );
}
