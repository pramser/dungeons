import GameObject from "./GameObject";
import { people } from "../assets";

interface PlayerProps {
  player: any;
}

export default function Player({ player }: PlayerProps) {
  return (
    <GameObject
      imageUri={people["default"][player.asset]["ld"].uri}
      position={player.position}
      yOffset={-4}
    />
  );
}
