import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileTopBar from "../../components/ProfileTopBar";
import UserDetail from "../../components/particles/UserDetail";
import HomeIconButton from "../../components/buttons/HomeIconButton";

const UserProfileScreen = () => {
  return (
    <View>
      <ProfileTopBar tittle="istiak mahmud" linkTittle="link here" />

      <UserDetail />

      <View styles={styles.homeButton}>
        <HomeIconButton img={require("../../assets/icons/homeIcon.png")} />
      </View>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  homeButton: {
    width: 50,
    height: 50,
  },
});
