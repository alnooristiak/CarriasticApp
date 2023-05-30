import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../src/theme/colors/colors";
import { typography } from "../../src/theme/styles/typography";

const BigButton = ({ onPress, tittle }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{tittle}</Text>
    </TouchableOpacity>
  );
};

export default BigButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.purple_light,
    padding: 12,
    borderRadius: 8,
    width: 155,
    height: 74,
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
