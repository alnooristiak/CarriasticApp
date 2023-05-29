import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AttendenceScreen from "../screen/AttendenceScreen";
import NotificationScreen from "../screen/NotificationScreen";
import DashboardScreen from "../screen/DashboardScreen";
import LeaveApplicationScreen from "../screen/LeaveApplicationScreen";
import LeavApplicationVPdfScreen from "../screen/LeavApplicationVPdfScreen";
import LeaveApplicationSentSceen from "../screen/LeaveApplicationSentSceen";
import RequisitionApiConfigScreen from "../screen/RequisitionApiConfigScreen";
import RequisitionInputScreen from "../screen/RequisitionInputScreen";
import RequisitionPdfScreen from "../screen/RequisitionPdfScreen";
import TaDaBillPdfViewScreen from "../screen/TaDaBillPdfViewScreen";
import TaDaBillInputScreen from "../screen/TaDaBillInputScreen";
import TaDaBillConfigScreen from "../screen/TaDaBillConfigScreen";
import DrawerComponents from "./DrawerComponents";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <DrawerComponents {...props} />}
        screenOptions={{
          drawerActiveTintColor: "#3A1078",
          headerShown: false,
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 700,
            marginLeft: -10,
            color: "purple",
            backgroundColor: '#1E1E1E'
          },
        }}
        initialRouteName="Dashboard"
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />

        {/* Attendence Start */}
        <Drawer.Screen
          name="AttendenceScreen"
          component={AttendenceScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        {/* Attendence End */}

        {/* Leave Application Start */}
        <Drawer.Screen
          name="LeavApplicationVPdfScreen"
          component={LeavApplicationVPdfScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        <Drawer.Screen
          name="LeaveApplicationScreen"
          component={LeaveApplicationScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        <Drawer.Screen
          name="LeaveApplicationSentSceen"
          component={LeaveApplicationSentSceen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        {/* Leave Application End */}

        {/* Requisition Start */}
        <Drawer.Screen
          name="RequisitionApiConfigScreen"
          component={RequisitionApiConfigScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        <Drawer.Screen
          name="RequisitionInputScreen"
          component={RequisitionInputScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        <Drawer.Screen
          name="RequisitionPdfScreen"
          component={RequisitionPdfScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        {/* Requisition End */}

        {/* Tada Bill Start */}
        <Drawer.Screen
          name="TaDaBillConfigScreen"
          component={TaDaBillConfigScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        <Drawer.Screen
          name="TaDaBillInputScreen"
          component={TaDaBillInputScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        <Drawer.Screen
          name="TaDaBillPdfViewScreen"
          component={TaDaBillPdfViewScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        {/* Tada Bill End */}

        {/* notifacation Start */}
        <Drawer.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { height: 0 },
            title: null,
            drawerIcon: () => null,
          }}
        />
        {/* notifacation End */}

        {/* <Drawer.Screen name="Notifications" component={NotificationScreen} /> */}
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
