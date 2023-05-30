import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import HeaderSection from "../../components/HeaderSection";
import InputDateButton from "../../components/buttons/InputDateButton";
import { Colors } from "../theme/colors/colors";
import CommonButton from "../../components/buttons/CommonButton";
import HomeIconButton from "../../components/buttons/HomeIconButton";

const TaDaBillInputScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderSection tittle="TA DA Bill" />
      <View style={styles.fromContainer}>
        <InputDateButton tittle="Purpose" />

        <InputDateButton
          tittle="Date"
          img={require("../../assets/icons/calender_i.png")}
        />

        <InputDateButton tittle="From" />

        <InputDateButton tittle="To" />

        <InputDateButton tittle="Amount" />

        <View style={{ marginTop: 30 }}>
          <CommonButton onPress={() => navigation.navigate("TaDaBillConfigScreen")}  tittle="SUBMIT" />
        </View>

        <View style={{ marginVertical: "10%" }}>
          <HomeIconButton
          onPress={() => navigation.navigate("DashboardScreen")}
            img={require("../../assets/icons/small_homeIcon.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default TaDaBillInputScreen;

const styles = StyleSheet.create({
  fromContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  problemText: {
    width: 270,
    borderBottomWidth: 2,
    borderBottomColor: Colors.black,
    borderRadius: 10,
    padding: 10,
    marginBottom: 18,
  },
});
