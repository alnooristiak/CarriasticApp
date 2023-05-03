import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../src/theme/colors/colors";

const SlimButtonSec = ({ onPress, tittle }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonBody} onPress={onPress}>
        <Text style={styles.buttonText}>{tittle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SlimButtonSec;

const styles = StyleSheet.create({
  buttonContainer: {},
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 700,
    textAlign: "center",
    paddingVertical: 7,
  },
  buttonBody: {},
});
