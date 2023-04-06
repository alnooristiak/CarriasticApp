import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../src/theme/colors/colors";

const ParagrapWithLink = ({ onPress, simpleText, linkText }) => {
  return (
    <View style={styles.navigateSec}>
      <Text style={styles.longText}>{simpleText}</Text>
      <Pressable onPress={onPress}>
        <Text style={[styles.longText, styles.loginText]}>{linkText}</Text>
      </Pressable>
    </View>
  );
};

export default ParagrapWithLink;

const styles = StyleSheet.create({
    // navigate section
  navigateSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 55,
  },
  longText: {
    fontSize: 16,
    fontWeight: 600,
    color: Colors.purple_dark,
  },
  loginText: {
    textDecorationLine: "underline",
    color: Colors.black
  },
});
