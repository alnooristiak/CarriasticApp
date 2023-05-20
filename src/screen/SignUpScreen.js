import {
  Alert,
  Button,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import LogoImage from "../../components/particles/LogoImage";
import InputWithIconSec from "../../components/inputs/InputWithIconSec";
import { Colors } from "../theme/colors/colors";
import ParagrapWithLink from "../../components/particles/ParagrapWithLink";

const SignUpScreen = ({ navigation }) => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [photo, setPhoto] = useState(null);
  
  const handleSignup = () => {
    if (
      userName === '' ||
      email === '' ||
      designation === '' ||
      employeeID === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    navigation.navigate('DashboardScreen');
  };

  // const handlePhotoUpload = () => {
  //   setPhoto(photoFile);
  // };

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <View style={styles.logoSec}>
        <LogoImage />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.mainBgContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
          {/* Inputs containers */}
          <View style={styles.inputS}>
            <View style={styles.inputContainerM}>
              <InputWithIconSec
                placeholder="Full Name"
                img={require("../../assets/icons/user_i.png")}
                value={userName}
        onChangeText={text => setUserName(text)}
              />
            </View>

            <View style={styles.inputContainerM}>
              <InputWithIconSec
                placeholder="Email"
                img={require("../../assets/icons/user_i.png")}
                value={email}
        onChangeText={text => setEmail(text)}
              />
            </View>

            <View style={styles.inputContainerM}>
              <InputWithIconSec
                placeholder="Designation"
                img={require("../../assets/icons/user_i.png")}
                value={designation}
        onChangeText={text => setDesignation(text)}
              />
            </View>

            <View style={styles.inputContainerM}>
              <InputWithIconSec
                placeholder="Employee ID"
                img={require("../../assets/icons/user_i.png")}
                value={employeeID}
        onChangeText={text => setEmployeeID(text)}
              />
            </View>

            <View style={styles.inputContainerM}>
              <InputWithIconSec
                placeholder="Password"
                img={require("../../assets/icons/user_i.png")}
                value={password}
        onChangeText={text => setPassword(text)}
              />
            </View>

            <View style={styles.inputContainerM}>
              <InputWithIconSec
                placeholder="Confirm Password"
                img={require("../../assets/icons/user_i.png")}
                value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
              />
            </View>

            <View style={[styles.inputContainerM, styles.lastInput]}>
              <InputWithIconSec
                placeholder="Rnter Photo"
                img={require("../../assets/icons/user_i.png")}
              />
              {/* <Button 
              style={styles.photoBtn} 
              title="Upload Photo" 
              onPress={handlePhotoUpload} /> */}
            </View>
          </View>

          <Pressable style={styles.signUpBtn} onPress={handleSignup}>
            <Text style={styles.signUpBtnText}>SIGN UP</Text>
          </Pressable>
        </View>
      </View>

      {/* bottom link section */}
      <ParagrapWithLink
        onPress={() => navigation.navigate("LoginScreen")}
        linkText="LOGIN"
        simpleText="Already have an account?  "
      />
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  logoSec: {
    marginTop: 45,
    marginBottom: 45,
  },
  mainContainer: {
    backgroundColor: Colors.purple_dark,
    borderColor: "blue",
    borderWidth: 3,
    width: "90%",
    borderRadius: 45,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    zindex: 1,
  },
  mainBgContainer: {
    width: "100%",
    borderRadius: 45,
  },
  signUpText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 27,
    marginBottom: 18,
    textAlign: "center",
  },
  inputS: {},
  lastInput: {
    marginBottom: 35,
  },
  // sign up btn section
  signUpBtn: {
    borderRadius: 7,
    backgroundColor: Colors.white,
    // padding: 5,
    width: 150,
    position: "absolute",
    bottom: -25,
    borderColor: Colors.border_color,
    borderWidth: 1,
    overflow: "visible",
    alignSelf: "center",
  },
  signUpBtnText: {
    color: Colors.purple_dark,
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
    // marginTop: 27,
    // marginBottom: 18,
    textAlign: "center",
  },
  photoBtn: {
    // flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center",
    padding: 8,
    width: "70%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "white",
    overflow: "hidden",
    marginBottom: 18,
  },
});
