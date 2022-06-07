import GameObject from "./GameObject";
import { ui } from "../assets";

export default function MovementTiles({ amount, isHidden, position, onPress }) {
  // tile props
  let tiles = [];

  // amount of tiles
  for (let t = 0; t < amount; t++) {
    tiles.push([
      <MovementTile
        position={{ ...position, x: position.x + 1 }}
        isHidden={isHidden}
        onPress={onPress}
      />,
      <MovementTile
        position={{ ...position, x: position.x - 1 }}
        isHidden={isHidden}
        onPress={onPress}
      />,
      <MovementTile
        position={{ ...position, y: position.y + 1 }}
        isHidden={isHidden}
        onPress={onPress}
      />,
      <MovementTile
        position={{ ...position, y: position.y - 1 }}
        isHidden={isHidden}
        onPress={onPress}
      />,
    ]);
  }

  return tiles;
}

export function MovementTile({ position, isHidden, onPress }) {
  return (
    <GameObject
      position={position}
      isHidden={isHidden}
      imageUri={ui.default.selected.uri}
      onPress={onPress}
    />
  );
}
