import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AttendenceScreen from "../screen/AttendenceScreen";
// import { NavigationContainer } from "@react-navigation/native";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      {/* <NavigationContainer> */}
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="AttendenceScreen" component={AttendenceScreen} options={{headerShown: true}} />
          {/* <Drawer.Screen name="Article" component={Article} /> */}
        </Drawer.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
