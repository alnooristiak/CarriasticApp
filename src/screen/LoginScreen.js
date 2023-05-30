import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import InputWithIconSec from "../../components/inputs/InputWithIconSec";
import LogoImage from "../../components/particles/LogoImage";
import { Colors } from "../theme/colors/colors";
import ParagrapWithLink from "../../components/particles/ParagrapWithLink";
import InfoIconLink from "../../components/buttons/InfoIconLink";
import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from "@react-navigation/native";
// import CheckBox from '@react-native-community/checkbox';
// import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  // user login hendeler 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const navigation = useNavigation();

  const handleSignIn = () => {
    // const navigation = useNavigation();
  
    if (email === 'carriastic@gmail.com' && password === 'password') {
      navigation.navigate('DashboardScreen');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#370054',]} style={{height: '100%'}}>
      {/* <View style={styles.conatiner}> */}
        <StatusBar
          style="auto"
          backgroundColor="#FFFFFF"
          barStyle="dark-content"
        />
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
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={[styles.inputContainerM, styles.lastInput]}>
                <InputWithIconSec
                  placeholder="Rnter Photo"
                  img={require("../../assets/icons/lock_i.png")}
                  value={password}
                  onChangeText={setPassword}
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
              {/* LOGIN button  */}
                <Pressable 
                onPress={handleSignIn}
                style={styles.signUpBtn}>
                  <Text style={styles.signUpBtnText}>LOGIN</Text>
                </Pressable>
                <View>
                  {/* LOGIN button error text  */}
                  <Text style={styles.errorText}>{error}</Text>
                </View>
                <Text style={styles.forgotText}>Forgot Password?</Text>
                <View style={styles.line}></View>
                <Text style={styles.orText}>OR</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <ParagrapWithLink
            onPress={() => navigation.navigate("SignUpScreen")}
            linkText="SIGNUP"
            simpleText="Need an account?       "
          />
        </View>

        <View style={styles.infoLink}>
          <InfoIconLink img={require("../../assets/icons/info_i.png")} />
        </View>
      {/* </View> */}
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  // conatiner: {
  //   backgroundColor: Colors.black,
  //   height: "100%",
  // },
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
    borderRadius: 45,
    padding: 10,
    backgroundColor: 'white',
    elevation: 5
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
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8
  },
  checkboxSection: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 52,
  },
  checBText: {
    fontSize: 16,
    fontWeight: 400,
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
    marginRight: 52,
  },
  line: {
    border: 0.5,
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    alignSelf: "center",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: 400,
    fontSize: 14,
  },
  infoLink: {
    bottom: -20,
  },
});
