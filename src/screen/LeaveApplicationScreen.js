import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import HeaderSection from "../../components/HeaderSection";
import InputDateButton from "../../components/buttons/InputDateButton";
import { Colors } from "../theme/colors/colors";
import CommonButton from "../../components/buttons/CommonButton";

const LeaveApplicationScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderSection tittle="Leave Application" />
      <View style={styles.fromContainer}>
        <InputDateButton
          tittle="Leave From"
          img={require("../../assets/icons/calender_i.png")}
        />

        <InputDateButton
          tittle="Leave To"
          img={require("../../assets/icons/calender_i.png")}
        />

        <InputDateButton tittle="Enter Your ID" />

        <View style={styles.reasonTextSection}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            placeholder="Write down the reason here"
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
            style={styles.problemText}
          />
        </View>

        <InputDateButton tittle="Enter Your Password" />

        <View style={{ marginTop: 30 }}>
          <CommonButton tittle="SUBMIT" />
        </View>
      </View>
    </View>
  );
};

export default LeaveApplicationScreen;

const styles = StyleSheet.create({
  fromContainer: {
    marginTop: 60,
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
