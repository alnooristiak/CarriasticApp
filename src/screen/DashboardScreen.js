import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderSection from "../../components/HeaderSection";
import BigButton from "../../components/buttons/BigButton";
import SlimButton from "../../components/buttons/SlimButton";
import ImageButton from "../../components/buttons/ImageButton";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      {/* === header section start === */}
      <HeaderSection tittle="Dashboard" />
      {/* === header section end ===  */}

      {/* === big button section start ===  */}
      <View style={styles.buttonContainer}>
        <View style={styles.smBtnSection}>
          <BigButton tittle="Leave Application" />
          <BigButton tittle="Leave Quota" />
        </View>
        <View style={styles.smBtnSection}>
          <BigButton tittle="Attendence History" />
          <BigButton tittle="Attendence" />
        </View>
        <View style={styles.smBtnSection}>
          <BigButton tittle="Requsition" />
          <BigButton tittle="Ta-Da Bill" />
        </View>
        <View style={styles.smBtnSection}>
          <BigButton tittle="Notifications" />
          <BigButton tittle="Training" />
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
          <SlimButton tittle="sign out" />
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
    marginTop: 60,
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
