import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../src/theme/colors/colors";

const SlimButton = ({ onPress, tittle }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{tittle}</Text>
    </TouchableOpacity>
  );
};

export default SlimButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 145,
    height: 30,
    borderRadius: 7,
    backgroundColor: Colors.purple_dark,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    fontWeight: 700,
    textTransform: "uppercase",
  },
});
