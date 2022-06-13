import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SimpleActionBarProps {
  onPressMove(): void;
  onPressAttack(): void;
  onPressWait(): void;
}

export default function SimpleActionBar(props: SimpleActionBarProps) {
  let { onPressMove, onPressAttack, onPressWait } = props;

  return (
    <View style={styles.actionPanel}>
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
      <TouchableOpacity
        style={{ ...styles.floatingButton, ...styles.waitButton }}
        onPress={onPressWait}
      >
        <Text style={styles.floatingButtonText}>Wait</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actionPanel: {
    position: "absolute",
    alignSelf: "center",
    bottom: 10,

    width: 330,
    height: 60,
    backgroundColor: "#a09780",
    borderRadius: 10,
    borderWidth: 1,

    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  floatingButton: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 8,
  },
  floatingButtonText: {
    color: "white",
    fontFamily: "Altima",
    fontSize: 20,
  },
  attackButton: { backgroundColor: "#800000" },
  moveButton: { backgroundColor: "#4277AD" },
  waitButton: { backgroundColor: "#000" },
});
