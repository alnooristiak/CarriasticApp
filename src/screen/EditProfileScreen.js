import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileTopBar from "../../components/ProfileTopBar";
import SimpleInputSec from "../../components/inputs/SimpleInputSec";
import SlimButton from "../../components/buttons/SlimButton";
import HomeIconButton from "../../components/buttons/HomeIconButton";

const EditProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <ProfileTopBar 
        tittle="Edit Profilee" 
        linkTittle="Change Photo"
        onPress={() => navigation.goBack()} 
        />
      </View>
      <ScrollView style={styles.inputContainer}>
        <SimpleInputSec lable="Email ID" placeholder="rafid@carriastic.com" />

        <SimpleInputSec
          lable="Phone Number"
          keyboardType="numeric"
          placeholder="+880 1850700054"
        />

        <SimpleInputSec
          lable="Password"
          placeholder="****************"
          secureTextEntry={true}
        />

        <SimpleInputSec
          lable="Confirm Password"
          placeholder="****************"
          secureTextEntry={true}
        />

        {/* slim button section */}
        <View style={styles.slimBtnContainer}>
          <SlimButton tittle="update" />
        </View>

        <View style={styles.homeIconBtn}>
          <HomeIconButton
            img={require("../../assets/icons/small_homeIcon.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    marginTop: 90,
  },
  slimBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: '3%',
  },
  homeIconBtn: {
    marginTop: '3%',
  },
});
