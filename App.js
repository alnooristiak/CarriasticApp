import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DashboardScreen from "./src/screen/DashboardScreen";
import ProfileTopBar from "./components/ProfileTopBar";
import UserProfileScreen from "./src/screen/UserProfileScreen";
import EditProfileScreen from "./src/screen/EditProfileScreen";
import SignUpScreen from "./src/screen/SignUpScreen";
import LoginScreen from "./src/screen/LoginScreen";
import LeaveApplicationScreen from "./src/screen/LeaveApplicationScreen";
import LeaveApplicationSentSceen from "./src/screen/LeaveApplicationSentSceen";
import LeavApplicationVPdfScreen from "./src/screen/LeavApplicationVPdfScreen";
import AttendenceScreen from "./src/screen/AttendenceScreen";
import RequisitionPdfScreen from "./src/screen/RequisitionPdfScreen";
import RequisitionInputScreen from "./src/screen/RequisitionInputScreen";
import RequisitionApiConfigScreen from "./src/screen/RequisitionApiConfigScreen";
import TaDaBillInputScreen from "./src/screen/TaDaBillInputScreen";
import TaDaBillPdfViewScreen from "./src/screen/TaDaBillPdfViewScreen";
import TaDaBillConfigScreen from "./src/screen/TaDaBillConfigScreen";
import NotificationScreen from "./src/screen/NotificationScreen";
import WelcomeLearningPage from "./src/screen/WelcomeLearningPage";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <DashboardScreen /> */}
      {/* <UserProfileScreen /> */}
      {/* <EditProfileScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <LoginScreen /> */}

      {/* === Leave === */}
      {/* <LeaveApplicationScreen /> */}
      {/* <LeaveApplicationSentSceen /> */}
      {/* <LeavApplicationVPdfScreen /> */}
      {/* <AttendenceScreen /> */}

      {/* === Requisition === */}
      {/* <RequisitionPdfScreen /> */}
      {/* <RequisitionInputScreen /> */}
      {/* <RequisitionApiConfigScreen /> */}

      {/* === TA DA Bill === */}
      {/* <TaDaBillInputScreen /> */}
      {/* <TaDaBillPdfViewScreen /> */}
      {/* <TaDaBillConfigScreen /> */}

      {/* === Notification === */}
      {/* <NotificationScreen />   */}

      {/* === Welcome Learning Page === */}
      <WelcomeLearningPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 10,
    marginTop: 10,
  },
});
