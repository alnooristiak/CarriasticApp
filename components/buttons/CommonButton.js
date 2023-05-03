import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../src/theme/colors/colors";

const CommonButton = ({ onPress, tittle }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{tittle}</Text>
    </Pressable>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    borderRadius: 5,
    width: 160,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 700,
    paddingHorizontal: 30,
    paddingVertical: 3,
    textAlign: "center",
  },
});
