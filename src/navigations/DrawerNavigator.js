import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../screen/DashboardScreen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
        {/* <Drawer.Screen name="Article" component={Article} /> */}
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
