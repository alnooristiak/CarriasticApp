import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HomeIconButton = ({ onPress, img }) => {
  return (
    <TouchableOpacity style={styles.homeBtnContainer} onPress={onPress}>
      <Image source={img} />
    </TouchableOpacity>
  );
};

export default HomeIconButton;

const styles = StyleSheet.create({
    homeBtnContainer: {
        alignSelf: 'center'
    }
});
