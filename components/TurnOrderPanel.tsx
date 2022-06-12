import { StyleSheet, Text } from "react-native";

interface TurnOrderPanelProps {
  activePlayer: any;
}

export default function TurnOrderPanel({ activePlayer }: TurnOrderPanelProps) {
  return (
    <Text style={styles.turns}>
      {activePlayer.charName} - {activePlayer.stats.hp}
    </Text>
  );
}

const styles = StyleSheet.create({
  turns: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "white",
  },
});
