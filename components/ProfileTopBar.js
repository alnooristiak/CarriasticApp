import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../src/theme/colors/colors";
import { Feather } from "@expo/vector-icons";

const ProfileTopBar = ({ onPress, tittle, linkTittle }) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.iconTittle}>
        <TouchableOpacity onPress={onPress}>
          <AntDesign
            style={styles.iconStyle}
            name="arrowleft"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.tittleText}>{tittle}</Text>
        </View>
      </View>
      <View style={styles.userImageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/user_big.png")}
        />
        <TouchableOpacity style={styles.editLink} onPress={onPress}>
          <Feather
            style={[styles.linkTextStyle, styles.linkIcon]}
            name="edit"
            size={24}
            color="black"
          />
          <Text style={styles.linkTextStyle}>{linkTittle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileTopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple_dark,
    padding: 15,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingTop: 30,
    paddingVertical: 95,
  },
  iconStyle: {
    // marginTop: 15,
    marginLeft: 10,
  },
  iconTittle: {
    position: "relative",
    flexDirection: "row",
    alignContent: "flex-start",
  },
  tittleText: {
    color: Colors.white,
    fontWeight: 400,
    fontSize: 30,
    marginLeft: 52,
  },
  imageStyle: {
    position: "absolute",
    bottom: -180,
    justifyContent: "center",
    zIndex: 1,
    alignSelf: "center",
    width: 165,
    height: 165
  },
  userImageContainer: {},
  editLink: {
    flexDirection: "row",
  },
  linkTextStyle: {
    position: "relative",
    bottom: -140,
    right: -275,
    color: Colors.black,
    fontWeight: 400,
    fontSize: 13,
    textDecorationLine: "underline",
  },
  linkIcon: {
    paddingRight: 8,
  },
});
