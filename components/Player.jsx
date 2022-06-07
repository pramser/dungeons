import { Image } from "react-native";
import { people } from "../assets";
import Math from "../types/Math";

export default function Player(props) {
  const { x, y, roomX, roomY } = props.position;
  let relativePosition = Math.getRoomPos(x, y, roomX, roomY, 32);

  const { name, set } = props.image;

  const style = {
    position: "absolute",
    left: relativePosition.x,
    top: relativePosition.y - 6,
    zIndex: 100,
  };

  return (
    <Image
      key={`player (${x}, ${y})`}
      source={people[set][name]["ld"].uri}
      style={style}
    />
  );
}
