import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import HeaderSection from "../../components/HeaderSection";
import BigButton from "../../components/buttons/BigButton";
import SlimButton from "../../components/buttons/SlimButton";
import ImageButton from "../../components/buttons/ImageButton";
// import DrawerNavigator from "../navigations/DrawerNavigator";
import DatePicker from "react-native-modern-datepicker";
import { set } from "react-native-reanimated";
import { getFormatedDate, getToday } from "react-native-modern-datepicker";
import { Colors } from "../theme/colors/colors";

const DashboardScreen = ({ navigation }) => {

  const today = new Date();

  const startDate = getFormatedDate(today.setDate(today.getDate() +1), 'YYYY/MM/DD')

  const [open, setOpen] = useState(false);
  const [date, seDate] = useState('02/02/2023');

  function handleOnPress () {
    setOpen(!open);
  };
  function handleChanged (propDate) {
    seDate(propDate);
  };

  return (
    <View style={styles.container}>

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
          <BigButton 
          onPress={() => navigation.navigate("LeaveQuotaScreen")}
          tittle="Leave Quota" 
          />
        </View>
        <View style={styles.smBtnSection}>
          
          {/* date picker */}
          <BigButton 
          onPress={handleOnPress}
          tittle="Attendence History" />
          {/* date picker model start */}
          <Modal 
          animationType="slide"
          transparent={true}
          visible={open}
          >
            <View style={styles.calenderView}>
            <View style={styles.modelView}>
              <DatePicker
              options={{
                backgroundColor: '#090C08',
                textHeaderColor: 'white',
                textDefaultColor: 'white',
                selectedTextColor: '#fff',
                mainColor: Colors.light_purple,
                textSecondaryColor: Colors.greay,
              }} 
              style={{ borderRadius: 10,}}
              mode="calendar"
              selected={date}
              onDateChange={handleChanged}
              minimumDate={startDate}
              />
              <TouchableOpacity onPress={handleOnPress}>
                <Text style={{
                  fontSize: 20, 
                  fontWeight: 'bold', 
                  marginTop: 8,
                  color: Colors.light_purple
                  }}>Close</Text>
              </TouchableOpacity>
            </View>
            </View>
          </Modal>
          {/* date picker model end */}

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
  calenderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modelView: {
    borderRadius: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    margin: 5,
    width: '90%',
    height: '80%',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
