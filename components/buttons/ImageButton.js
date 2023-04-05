import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ImageButton = ({ onPress, img }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.iconImg} source={img} />
    </TouchableOpacity>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  iconImg: {
    width: 150,
    height: 65,
  },
});
