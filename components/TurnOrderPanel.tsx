import { StyleSheet, Text, View } from "react-native";
import { Player } from "../types/GameEssentials";

interface TurnOrderPanelProps {
  activePlayer: Player;
  players: Player[];
}

export default function TurnOrderPanel(props: TurnOrderPanelProps) {
  let { activePlayer, players } = props;

  return (
    <View style={styles.turns}>
      {players.map((player) => (
        <Text style={styles.turnsText}>
          {activePlayer.charName === player.charName ? "* " : ""}
          {player.charName} - {player.stats.hp}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  turns: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  turnsText: {
    color: "white",
    fontFamily: "Altima",
    fontSize: 24,
  },
});
