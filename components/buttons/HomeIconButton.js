import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeIconButton = ({ img }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.homeBtnContainer} onPress={() => navigation.navigate("DashboardScreen")}>
      <Image source={img} />
    </TouchableOpacity>
  );
};

export default HomeIconButton;

const styles = StyleSheet.create({
  homeBtnContainer: {
    alignSelf: "center",
  },
});
