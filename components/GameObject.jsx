import { Image, TouchableOpacity } from "react-native";
import Math from "../types/Math";

export default function GameObject({
  imageUri,
  isHidden,
  onPress,
  position,
  xOffset,
  yOffset,
}) {
  let { x, y } = Math.getRoomPos(
    position.x,
    position.y,
    position.roomX,
    position.roomY,
    32
  );

  if (!xOffset) {
    xOffset = 0;
  }

  if (!yOffset) {
    yOffset = 14;
  }

  const style = {
    position: "absolute",
    left: x + xOffset,
    top: y + yOffset,
    zIndex: 50,
  };

  if (isHidden) {
    return null;
  }

  return onPress ? (
    <TouchableOpacity onPress={() => onPress(position)}>
      <Image source={imageUri} style={style} />
    </TouchableOpacity>
  ) : (
    <Image source={imageUri} style={style} />
  );
}
