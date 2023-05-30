import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../src/theme/colors/colors";

const NotifiText = ({ tittle, bgColor }) => {
  return (
    <View style={[styles.textContainer, { backgroundColor: bgColor }]}>
      <Text style={styles.textStyle}>{tittle}</Text>
    </View>
  );
};

export default NotifiText;

const styles = StyleSheet.create({
  textContainer: {
    // backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
    width: '95%',
  },
  textStyle: {
    paddingVertical: 7,
    paddingHorizontal: 5,
    color: Colors.white,
    fontSize: 20,
    fontWeight: 400,
    textAlign: "left",
  },
});
