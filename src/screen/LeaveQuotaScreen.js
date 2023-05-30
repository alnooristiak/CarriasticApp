import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import HeaderSection from "../../components/HeaderSection";
import { Colors } from "../theme/colors/colors";
import { LinearGradient } from "expo-linear-gradient";
import HomeIconButton from "../../components/buttons/HomeIconButton";

const LeaveQuotaScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const totalLeave = 20; // Employee's total leave
  const leaveTaken = 5; // Leave already taken

  // Function to handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  // Calculate remaining leave
  const remainingLeave = totalLeave - leaveTaken;

  return (
    <View style={styles.container}>
      <HeaderSection
        // onPress={() => navigation.navigate("UserProfileScreen")}
        tittle="Leave Quota"
      />
      {/* <Text style={styles.label}>Select Date:</Text> */}
      <View style={styles.row}>
        <DatePicker
          style={styles.datePicker}
          mode="calendar"
          format="YYYY-MM-DD"
          onDateChange={handleDateSelect}
          options={{
            backgroundColor: "#090C08",
            textHeaderColor: "white",
            textDefaultColor: "white",
            selectedTextColor: "#fff",
            mainColor: Colors.light_purple,
            textSecondaryColor: Colors.greay,
          }}
        />
        {/* gradiant Start */}
        <View style={styles.labelContainer}>
          <LinearGradient
            colors={["white", "purple"]}
            start={[0, 0.5]}
            end={[1, 0.5]}
            style={styles.labelContainer}
          >
            <Text style={styles.label}>Total Leave</Text>
            <Text style={styles.label}>{totalLeave}</Text>
          </LinearGradient>
        </View>
        <View style={styles.labelContainer}>
          <LinearGradient
            colors={["white", "purple"]}
            start={[0, 0.5]}
            end={[1, 0.5]}
            style={styles.labelContainer}
          >
            <Text style={styles.label}>Leave Taken</Text>
            <Text style={styles.label}>{leaveTaken}</Text>
          </LinearGradient>
        </View>
        <View style={styles.labelContainer}>
          <LinearGradient
            colors={["white", "purple"]}
            start={[0, 0.5]}
            end={[1, 0.5]}
            style={styles.labelContainer}
          >
            <Text style={styles.label}>Remaining Leave</Text>
            <Text style={styles.label}>{remainingLeave}</Text>
          </LinearGradient>
        </View>
        {/* gradiant end */}
        <Text style={styles.selectedDate}>
          Selected Date: {selectedDate || "No date selected"}
        </Text>
        <View>
            <HomeIconButton img={require("../../assets/icons/moni_home.png")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    borderRadius: 10,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    width: "95%",
    padding: 5,
    alignSelf: "center",
    elevation: 4,
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  datePicker: {
    width: "90%",
    marginVertical: 20,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.black,
    borderRadius: 20,
    height: 30,
  },
  selectedDate: {
    marginVertical: 10,
    fontSize: 15,
    textAlign: 'center'
  },
});

export default LeaveQuotaScreen;
