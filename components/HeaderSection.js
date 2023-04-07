import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../src/theme/colors/colors";

const HeaderSection = ({ tittle, Secondtittle }) => {
  return (
    <>
      <View style={styles.container}>
        <Feather name="menu" size={35} color="white" />
        <Text style={styles.mTittle}>{tittle}</Text>
        {/* <Text style={styles.mTittle}>{Secondtittle}</Text> */}
        <Image
          style={styles.userImg}
          source={require("../assets/images/user.png")}
        />
      </View>
    </>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple_dark,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  mTittle: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 30,
  },
});
