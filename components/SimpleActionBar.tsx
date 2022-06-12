import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface SimpleActionBarProps {
  onPressMove(): void;
}

export default function SimpleActionBar({ onPressMove }: SimpleActionBarProps) {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPressMove}>
      <Text style={styles.floatingButtonText}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4277AD",
    position: "absolute",
    bottom: 15,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButtonText: {
    marginTop: -5,
    fontSize: 40,
    color: "white",
  },
});
