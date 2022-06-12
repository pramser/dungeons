import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SimpleActionBarProps {
  onPressMove(): void;
  onPressAttack(): void;
}

export default function SimpleActionBar({
  onPressMove,
  onPressAttack,
}: SimpleActionBarProps) {
  return (
    <View>
      <TouchableOpacity
        style={{ ...styles.floatingButton, ...styles.moveButton }}
        onPress={onPressMove}
      >
        <Text style={styles.floatingButtonText}>Move</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.floatingButton, ...styles.attackButton }}
        onPress={onPressAttack}
      >
        <Text style={styles.floatingButtonText}>Attack</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    width: 120,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButtonText: {
    marginTop: -5,
    fontSize: 20,
    color: "white",
  },
  attackButton: {
    backgroundColor: "#800000",
    bottom: 85,
    right: 15,
  },
  moveButton: {
    backgroundColor: "#4277AD",
    bottom: 15,
    right: 15,
  },
});
