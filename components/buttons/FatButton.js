import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { typography } from "../../src/theme/styles/typography";
import { Colors } from "../../src/theme/colors/colors";

const FatButton = ({ onPress, tittle }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{tittle}</Text>
    </TouchableOpacity>
  );
};

export default FatButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.purple_light,
    padding: 12,
    borderRadius: 8,
    width: 155,
    height: 74,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: typography.primary,
    textAlign: "center",
  },
});
