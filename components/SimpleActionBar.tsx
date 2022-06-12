import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SimpleActionBarProps {
  onPressMove(): void;
  onPressAttack(): void;
  onPressWait(): void;
}

export default function SimpleActionBar(props: SimpleActionBarProps) {
  let { onPressMove, onPressAttack, onPressWait } = props;

  return (
    <View>
      <TouchableOpacity
        style={{ ...styles.floatingButton, ...styles.waitButton }}
        onPress={onPressWait}
      >
        <Text style={styles.floatingButtonText}>Wait</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.floatingButton, ...styles.attackButton }}
        onPress={onPressAttack}
      >
        <Text style={styles.floatingButtonText}>Attack</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.floatingButton, ...styles.moveButton }}
        onPress={onPressMove}
      >
        <Text style={styles.floatingButtonText}>Move</Text>
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
  waitButton: {
    backgroundColor: "#000",
    bottom: 155,
    right: 15,
  },
});
