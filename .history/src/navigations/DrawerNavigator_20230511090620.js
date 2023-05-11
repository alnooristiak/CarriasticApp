import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AttendenceScreen from "../screen/AttendenceScreen";
import NotificationScreen from "../screen/NotificationScreen";
import DashboardScreen from "../screen/DashboardScreen";
// import { NavigationContainer } from "@react-navigation/native";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      {/* <NavigationContainer> */}
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "#3A1078",
          headerShown: false,
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 700,
            marginLeft: -10,
            color: "white",
          },
        }}
        initialRouteName="Dashboard"
      >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
