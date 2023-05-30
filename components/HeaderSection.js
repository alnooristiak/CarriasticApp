import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../src/theme/colors/colors";
import UserIconImageLink from "./particles/UserIconImageLink";
import { useNavigation } from "@react-navigation/native";

const HeaderSection = ({ tittle, Secondtittle, onPress, onPresss }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={35} color="white" />
        </TouchableOpacity>
        {/* <MenuIcon /> */}
        <Text style={styles.mTittle}>{tittle}</Text>
        {/* <Text style={styles.mTittle}>{Secondtittle}</Text> */}
        <UserIconImageLink onPress={() => navigation.navigate("UserProfileScreen")} />
      </View>
    </>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple_dark,
    padding: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "6%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  mTittle: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 25,
  },
});
