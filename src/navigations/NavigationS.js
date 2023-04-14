import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StackNavigations from "./StackNavigations";
import DrawerNavigator from "./DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";

const NavigationS = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigations />
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default NavigationS;

const styles = StyleSheet.create({});
