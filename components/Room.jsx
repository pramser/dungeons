import { Image } from "react-native";

export default function Room(props) {
  const { x, y } = props.position;
  const uri = props.uri;

  const style = {
    position: "absolute",
    left: x,
    top: y,
  };

  return <Image key={`image (${x}, ${y})`} source={uri} style={style} />;
}
