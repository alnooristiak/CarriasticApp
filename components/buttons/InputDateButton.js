import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../src/theme/colors/colors";

const InputDateButton = ({ img, tittle }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.datePicSec}>
        <Text style={styles.textSec}>{tittle}</Text>
        <Image style={styles.imageSec} source={img} />
      </View>
    </Pressable>
  );
};

export default InputDateButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  datePicSec: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 270,
    borderBottomWidth: 2,
    borderBottomColor: Colors.black,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 34,
    padding: 10,
  },
  textSec: {
    // width: "90%",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 16,
    fontWeight: 400,
    color: Colors.greay_theam,
  },
  imageSec: {
    // width: "10%",
    width: 25,
    height: 25,
  },
});
