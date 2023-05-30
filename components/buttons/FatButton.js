import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { typography } from "../../src/theme/styles/typography";
import { Colors } from "../../src/theme/colors/colors";

const FatButton = ({ onPress, tittle, bgColor }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{tittle}</Text>
    </TouchableOpacity>
  );
};

export default FatButton;

const styles = StyleSheet.create({
  buttonStyle: {
    // backgroundColor: Colors.purple_light,
    padding: 12,
    borderRadius: 8,
    width: 265,
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
