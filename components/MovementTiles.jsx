import GameObject from "./GameObject";
import { ui } from "../assets";
import Math from "../types/Math";

export default function MovementTiles(props) {
  // tile props
  let { amount, isHidden, position, onPress } = props;
  let { x, y } = Math.getRoomPos(
    position.x,
    position.y,
    position.roomX,
    position.roomY,
    32
  );

  let tiles = [];

  // amount of tiles
  for (let t = 0; t < amount; t++) {
    tiles.push([
      <MovementTile
        position={{ x: x + 16 * (t + 1), y: y - 8 * (t + 1) }}
        isHidden={isHidden}
        onPress={onPress}
      />,
      <MovementTile
        position={{ x: x + 16 * (t + 1), y: y + 8 * (t + 1) }}
        isHidden={isHidden}
        onPress={onPress}
      />,
      <MovementTile
        position={{ x: x - 16 * (t + 1), y: y + 8 * (t + 1) }}
        isHidden={isHidden}
        onPress={onPress}
      />,
      <MovementTile
        position={{ x: x - 16 * (t + 1), y: y - 8 * (t + 1) }}
        isHidden={isHidden}
        onPress={onPress}
      />,
    ]);
  }

  return tiles;
}

export function MovementTile(props) {
  let { position, isHidden, onPress } = props;

  return (
    <GameObject
      position={position}
      isHidden={isHidden}
      imageUri={ui.default.selected.uri}
      onPress={onPress}
    />
  );
}
