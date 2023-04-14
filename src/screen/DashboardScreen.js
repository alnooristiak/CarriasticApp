import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderSection from "../../components/HeaderSection";
import BigButton from "../../components/buttons/BigButton";
import SlimButton from "../../components/buttons/SlimButton";
import ImageButton from "../../components/buttons/ImageButton";
import DrawerNavigator from "../navigations/DrawerNavigator";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DrawerNavigator />

      {/* === header section start === */}
      <HeaderSection tittle="Dashboard" />
      {/* === header section end ===  */}

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
          <BigButton tittle="Attendence History" />
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
      <View style={{ padding: 10 }}>
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
    marginTop: 50,
    padding: 10,
  },
  smBtnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 17,
    marginBottom: 23,
  },
});
