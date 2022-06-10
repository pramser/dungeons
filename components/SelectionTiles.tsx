import { useEffect } from "react";
import { Animated } from "react-native";

import GameObject from "./GameObject";

import { ui } from "../assets";

interface SelectionTilesProps {
  isHidden?: boolean;
  onPress(position: any): void;
  position: any;
  range: number;
}

export default function SelectionTiles({
  isHidden,
  onPress,
  position,
  range,
}: SelectionTilesProps): any {
  // tile props
  let tiles = [];

  // amount of tiles
  for (let t = 0; t < range; t++) {
    tiles.push([
      <SelectionTile
        position={{ ...position, x: position.x + 1 }}
        isHidden={isHidden}
        onPress={onPress}
      />,
      <SelectionTile
        position={{ ...position, x: position.x - 1 }}
        isHidden={isHidden}
        onPress={onPress}
      />,
      <SelectionTile
        position={{ ...position, y: position.y + 1 }}
        isHidden={isHidden}
        onPress={onPress}
      />,
      <SelectionTile
        position={{ ...position, y: position.y - 1 }}
        isHidden={isHidden}
        onPress={onPress}
      />,
    ]);
  }

  return tiles;
}

interface SelectionTileProps {
  position: any;
  isHidden?: boolean;
  mode?: string;
  onPress(position: any): void;
}

export function SelectionTile({
  position,
  isHidden,
  mode,
  onPress,
}: SelectionTileProps) {
  let fadeAnim = new Animated.Value(1);

  if (isHidden) {
    return null;
  }

  if (!mode) {
    mode = "default";
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
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
        imageUri={ui.select[mode].uri}
        onPress={onPress}
      />
    </Animated.View>
  );
}
