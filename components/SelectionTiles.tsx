import GameObject from "./GameObject";
import { ui } from "../assets";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";

interface SelectionTilesProps {
  amount: number;
  isHidden?: boolean;
  position: any;
  onPress(position: any): void;
}

export default function SelectionTiles({
  amount,
  isHidden,
  position,
  onPress,
}: SelectionTilesProps): any {
  // tile props
  let tiles = [];

  // amount of tiles
  for (let t = 0; t < amount; t++) {
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
    mode = "option";
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
        imageUri={ui.select[mode].uri}
        onPress={onPress}
      />
    </Animated.View>
  );
}
