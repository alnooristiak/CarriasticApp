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
      <Drawer.Navigator screenOptions={{
        drawerActiveTintColor: "#3A1078",
        headerShown: false,
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 700,
          marginLeft: -10,
          color: "white",
        },
      }}
      initialRouteName="DashboardScreen2">
        {/* <Drawer.Screen
          name="AttendenceScreen"
          component={AttendenceScreen}
          options={{ headerShown: true }}
        /> */}
        <Drawer.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="DashboardScreen2"
          component={DashboardScreen}
          options={{ headerShown: true }}
        />
        {/* <Drawer.Screen name="Article" component={Article} /> */}
      </Drawer.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});



{/* <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
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
      initialRouteName="Home2"
    ></Drawer.Navigator> */}