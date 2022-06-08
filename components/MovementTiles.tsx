import GameObject from "./GameObject";
import { ui } from "../assets";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";

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
}: MovementTilesProps): any {
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
  let fadeAnim = new Animated.Value(1);

  if (isHidden) {
    return null;
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  });

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <GameObject
        position={position}
        isHidden={isHidden}
        imageUri={ui.default.selected.uri}
        onPress={onPress}
      />
    </Animated.View>
  );
}
