import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderSection from "../../components/HeaderSection";
import FatButton from "../../components/buttons/FatButton";
import HomeIconButton from "../../components/buttons/HomeIconButton";
import { Colors } from "../theme/colors/colors";

const AttendenceScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderSection tittle="Attendance" />

      <View style={styles.buttonSec}>
        <View style={{ marginVertical: 20 }}>
          <FatButton bgColor={Colors.green} tittle="Entry" />
        </View>
        <View style={{ marginVertical: 20 }}>
          <FatButton bgColor={Colors.rad} tittle="Exit" />
        </View>
      </View>

      <View style={styles.homeLink}>
        <HomeIconButton img={require("../../assets/icons/homeIcon.png")} />
      </View>
    </View>
  );
};

export default AttendenceScreen;

const styles = StyleSheet.create({
  buttonSec: {
    marginVertical: '40%',
  },
  homeLink: {
    // marginTop: 120
}
});
