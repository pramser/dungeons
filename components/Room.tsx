import { Image, ImageStyle, TouchableOpacity } from "react-native";
import { Room as TRoom } from "../types/DungeonEssentials";

interface RoomProps {
  onPress(position: any): void;
  room: TRoom;
}

export default function Room({ onPress, room }: RoomProps) {
  const rPos = room.getAbsolutePosition();

  const style = {
    position: "absolute",
    left: rPos.x,
    top: rPos.y,
  } as ImageStyle;

  return (
    <TouchableOpacity key={room.describe()} onPress={() => onPress(rPos)}>
      <Image source={room.uri} style={style} />
    </TouchableOpacity>
  );
}
