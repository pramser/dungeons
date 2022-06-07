import { people } from "../assets";
import GameObject from "./GameObject";

export default function Player({ name, position }) {
  return (
    <GameObject
      imageUri={people["default"][name]["ld"].uri}
      position={position}
      yOffset={-6}
    />
  );
}
