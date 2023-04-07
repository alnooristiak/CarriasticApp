import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../src/theme/colors/colors";

const PopupText = ({ tittle, secondTittle }) => {
  return (
    <View style={styles.popupContainer}>
      <Text style={styles.popupText}>{tittle}</Text>
      <Text style={[styles.popupText, styles.secondText]}>{secondTittle}</Text>
    </View>
  );
};

export default PopupText;

const styles = StyleSheet.create({
  popupContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: Colors.greay_theam,
    borderBottomWidth: 2,
    padding: 35,
    borderRadius: 25
  },
  popupText: {
    fontSize: 24,
    fontWeight: 400,
    textAlign: "center",
  },
  secondText: {
    marginTop: 10,
  },
});
