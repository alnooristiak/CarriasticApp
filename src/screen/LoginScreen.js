import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import InputWithIconSec from "../../components/inputs/InputWithIconSec";
import LogoImage from "../../components/particles/LogoImage";
import { Colors } from "../theme/colors/colors";
import ParagrapWithLink from "../../components/particles/ParagrapWithLink";
import InfoIconLink from "../../components/buttons/InfoIconLink";
// import CheckBox from '@react-native-community/checkbox';

const LoginScreen = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.losogSection}>
        <LogoImage />
      </View>

      {/* image and input sectino */}
      <View style={[styles.userInputSec]}>
        <View style={styles.shadowProp}>
          <Image
            style={styles.boyImage}
            source={require("../../assets/images/signup_img.png")}
          />
          {/* inputs */}
          <View style={{ marginTop: 80 }}>
            <View style={[styles.inputContainerM, styles.lastInput]}>
              <InputWithIconSec
                placeholder="Rnter Photo"
                img={require("../../assets/icons/email_i.png")}
              />
            </View>
            <View style={[styles.inputContainerM, styles.lastInput]}>
              <InputWithIconSec
                placeholder="Rnter Photo"
                img={require("../../assets/icons/lock_i.png")}
              />
            </View>

            <View style={styles.checkboxSection}>
              <View>
                {/* <CheckBox 
                disabled={false} 
                style={styles.checkbox} 
                /> */}
                <Text style={styles.checBText}>Remember Me</Text>
              </View>
            </View>
            <View>
              <Pressable style={styles.signUpBtn}>
                <Text style={styles.signUpBtnText}>LOGIN</Text>
              </Pressable>
              <Text style={styles.forgotText}>Forgot Password?</Text>
              <View style={styles.line}></View>
              <Text style={styles.orText}>OR</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <ParagrapWithLink linkText='SIGNUP' simpleText='Need an account?       ' />
      </View>

      <View style={styles.infoLink}>
        <InfoIconLink img={require("../../assets/icons/info_i.png")} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: Colors.purple_light,
    height: '100%'
  },
  losogSection: {
    marginTop: 40,
    marginBottom: 30,
  },

  userInputSec: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },

  shadowProp: {
    width: "90%",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 45,
    padding: 10,
  },
  boyImage: {
    // width: 120,
    // height: 120,
    // padding: 12,
    borderRadius: 60,
    borderWidth: 1,
    // borderColor: "green",
    top: 10,
    position: "absolute",
    marginTop: -85,
    justifyContent: "center",
    alignSelf: "center",
  },
  // forgot test style
  signUpBtn: {
    borderRadius: 7,
    backgroundColor: Colors.purple_dark,
    padding: 8,
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  checkboxSection: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 52
  },
  checBText: {
    fontSize: 16,
    fontWeight: 400
  },
  signUpBtnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 700,
    textAlign: "center",
  },
  forgotText: {
    textAlign: "right",
    marginVertical: 17,
    fontSize: 14,
    fontWeight: 400,
    marginRight: 52
  },
  line: {
    border: 1,
    borderWidth: 0.5,
    borderColor: "black",
    width: '80%',
    alignSelf: 'center'
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: 400,
    fontSize: 14,
  },
  infoLink: {
    bottom: -50
  }
});
