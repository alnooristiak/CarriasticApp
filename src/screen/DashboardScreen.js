import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderSection from "../../components/HeaderSection";
import BigButton from "../../components/buttons/BigButton";
import SlimButton from "../../components/buttons/SlimButton";
import ImageButton from "../../components/buttons/ImageButton";
import DrawerNavigator from "../navigations/DrawerNavigator";
import DatePicker from 'react-native-datepicker';
// import { Alert } from "react-native";
// import { Button } from "react-native";

const DashboardScreen = ({ navigation }) => {
  // const [selectedDate, setSelectedDate] = useState('');

  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };

  // const handleShowDatePicker = () => {
  //   Alert.alert('Selected Date', selectedDate);
  // };

  return (
    <View style={styles.container}>

      {/* date picker start */}
      {/* <View>
      <DatePicker
        date={selectedDate}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        onDateChange={handleDateChange}
      />
      {/* <Button title="Show Date Picker"  /> */}
    {/* </View> */} 
      {/* date picker start */}

      {/* === header section start === */}
      <HeaderSection
        // onPress={() => navigation.navigate("UserProfileScreen")}
        tittle="Dashboard"
      />
      {/* === header section end ===  */}

      {/* <DrawerNavigator /> */}

      {/* === big button section start ===  */}
      <View style={styles.buttonContainer}>
        <View style={styles.smBtnSection}>
          <BigButton
            onPress={() => navigation.navigate("LeaveApplicationScreen")}
            tittle="Leave Application"
          />
          <BigButton tittle="Leave Quota" />
        </View>
        <View style={styles.smBtnSection}>
          {/* date picker */}
          <BigButton 
          // onPress={handleShowDatePicker}
          tittle="Attendence History" />
          <BigButton
            onPress={() => navigation.navigate("AttendenceScreen")}
            tittle="Attendence"
          />
        </View>
        <View style={styles.smBtnSection}>
          <BigButton
            onPress={() => navigation.navigate("RequisitionInputScreen")}
            tittle="Requsition"
          />
          <BigButton
            onPress={() => navigation.navigate("TaDaBillInputScreen")}
            tittle="Ta-Da Bill"
          />
        </View>
        <View style={styles.smBtnSection}>
          <BigButton
            onPress={() => navigation.navigate("NotificationScreen")}
            tittle="Notifications"
          />
          <BigButton
            onPress={() => navigation.navigate("WelcomeLearningPage")}
            tittle="Training"
          />
        </View>
        <View style={styles.smBtnSection}>
          <BigButton tittle="Events" />
          <BigButton tittle="Contacts" />
        </View>
      </View>
      {/* === big button section end ===  */}

      {/* === slim button section start ===  */}
      <View style={{ padding: "4%" }}>
        <View style={styles.smBtnSection}>
          <SlimButton
            onPress={() => navigation.navigate("LoginScreen")}
            tittle="sign out"
          />
          <ImageButton img={require("../../assets/icons/chat_icon.png")} />
        </View>
      </View>
      {/* === slim button section end ===  */}
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    // marginTop: 60
  },
  buttonContainer: {
    marginTop: "15%",
    padding: "5%",
  },
  smBtnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginHorizontal: "3%",
    marginBottom: "5%",
  },
});
