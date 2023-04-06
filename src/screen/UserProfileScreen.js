import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileTopBar from "../../components/ProfileTopBar";
import UserDetail from "../../components/particles/UserDetail";
import HomeIconButton from "../../components/buttons/HomeIconButton";

const UserProfileScreen = () => {
  return (
    <View>
      <View>
        <ProfileTopBar 
        tittle="test name" 
        linkTittle="Edit Profile" 
        />
      </View>

      <View>
        <UserDetail />
      </View>

      <View style={styles.homeButton}>
        <HomeIconButton
          style={styles.homeIconImage}
          img={require("../../assets/icons/homeIcon.png")}
        />
      </View>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  homeButton: {
    width: 50,
    height: 50,
    marginTop: 90,
    justifyContent: 'center',
    alignSelf: 'center'
  },
});
