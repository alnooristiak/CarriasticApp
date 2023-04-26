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
import DrawerNavigator from "../src/navigations/DrawerNavigator";

const HeaderSection = ({ navigation, tittle, Secondtittle, onPress,  }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Feather name="menu" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.mTittle}>{tittle}</Text>
        {/* <Text style={styles.mTittle}>{Secondtittle}</Text> */}
        <UserIconImageLink
          onPress={() => navigation.navigate("UserProfileScreen")}
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
    paddingVertical: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  mTittle: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 30,
  },
});
