import { useEffect } from "react";
import { Animated } from "react-native";

import GameObject from "./GameObject";

import { ui } from "../assets";

/**
 * Shapes for selection ranges
 * - These should be loaded every time
 * this component loads so they're available whenever
 * I need them.
 */
const Shapes = {
  star: [
    [
      [0, -1],
      [-1, 0],
      [1, 0],
      [0, 1],
    ],
    [
      [-1, -1],
      [0, -1],
      [1, -1],
      [-1, 0],
      [1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [0, -2],
      [-2, 0],
      [2, 0],
      [0, 2],
    ],
  ],
  square: [
    [
      [-1, -1],
      [0, -1],
      [1, -1],
      [-1, 0],
      [1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
    ],
  ],
};

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
  // get shape from consts
  let shape = Shapes.square[range - 1];

  // tile props
  let tiles = [];

  // amount of tiles
  for (let t = 0; t < shape.length; t++) {
    let [xOffset, yOffset] = shape[t];
    let tilePosition = {
      ...position,
      x: position.x + xOffset,
      y: position.y + yOffset,
    };

    tiles.push([
      <SelectionTile
        key={tilePosition}
        position={tilePosition}
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