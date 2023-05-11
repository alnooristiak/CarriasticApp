import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const MenuIcon = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity  onPress={() => navigation.toggleDrawer(DrawerNavigator)} >
        <Feather name="menu" size={35} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({});
