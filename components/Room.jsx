import { Image, TouchableOpacity } from "react-native";

export default function Room({ onPress, room }) {
  const rPos = room.getAbsolutePosition();

  const style = {
    position: "absolute",
    left: rPos.x,
    top: rPos.y,
  };

  return (
    <TouchableOpacity key={room.describe()} onPress={() => onPress(rPos)}>
      <Image source={room.uri} style={style} />
    </TouchableOpacity>
  );
}
