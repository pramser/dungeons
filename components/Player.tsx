import GameObject from "./GameObject";
import { people } from "../assets";

interface PlayerProps {
  name: string;
  position: any;
}

export default function Player({ name, position }: PlayerProps) {
  return (
    <GameObject
      imageUri={people["default"][name]["ld"].uri}
      position={position}
      yOffset={-4}
    />
  );
}
