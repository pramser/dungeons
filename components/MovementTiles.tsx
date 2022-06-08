import GameObject from "./GameObject";
import { ui } from "../assets";

interface MovementTilesProps {
  amount: number;
  isHidden?: boolean;
  position: any;
  onPress(position: any): void;
}

export default function MovementTiles({
  amount,
  isHidden,
  position,
  onPress,
}: MovementTilesProps) {
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

interface MovementTileProps {
  position: any;
  isHidden?: boolean;
  onPress(position: any): void;
}

export function MovementTile({
  position,
  isHidden,
  onPress,
}: MovementTileProps) {
  return (
    <GameObject
      position={position}
      isHidden={isHidden}
      imageUri={ui.default.selected.uri}
      onPress={onPress}
    />
  );
}
