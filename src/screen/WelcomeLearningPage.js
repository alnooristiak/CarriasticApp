import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../theme/colors/colors";
import { typography } from "../theme/styles/typography";
import FatButton from "../../components/buttons/FatButton";

const WelcomeLearningPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftArrow}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.iconStyle}
            name="arrowleft"
            size={35}
            color="white"
          />
        </Pressable>
      </View>

      <View style={styles.texContainer}>
        <Text style={styles.wText}>Welcome to</Text>
        <Text style={styles.wText}>Carriastic</Text>
        <Text style={styles.wText}>Learning</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputSec}
          placeholder="Please enter your training code"
          placeholderTextColor="#BA51F1"
        />
      </View>

      <View style={styles.loginBtn}>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>Login</Text>
          <AntDesign name="rightcircle" size={28} color={Colors.purple_light} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeLearningPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light_purple,
    height: "100%",
  },
  leftArrow: {
    marginVertical: 50,
    marginLeft: 20,
  },
  texContainer: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1
    marginVertical: "20%",
  },
  wText: {
    fontSize: 40,
    fontWeight: 400,
    color: Colors.white,
  },
  inputContainer: {
    justifyContent: "center",
    alignSelf: "center",
  },
  inputSec: {
    width: 360,
    height: 50,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 3,
    shadowRadius: 5,
    paddingHorizontal: 20,
    fontSize: 20,
    // fontWeight: 400
  },

  //   button style
  loginBtn: {
    marginTop: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 8,
    width: 155,
    height: 74,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: Colors.purple_light,
    fontWeight: 400,
    fontSize: 28,
    fontFamily: typography.primary,
  },
});
