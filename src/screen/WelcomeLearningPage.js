import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../theme/colors/colors";
import { typography } from "../theme/styles/typography";

const WelcomeLearningPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <AntDesign
          style={styles.iconStyle}
          name="arrowleft"
          size={30}
          color="white"
        />
      </View>

      <View>
        <Text>Welcome to</Text>
        <Text>Carriastic</Text>
        <Text>Learning</Text>
      </View>

      <View>
        <TextInput placeholder="Please enter your training code" />
      </View>

      <View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Login</Text>
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

  //   button style
  buttonStyle: {
    backgroundColor: Colors.purple_light,
    padding: 12,
    borderRadius: 8,
    width: 155,
    height: 74,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: typography.primary,
    textAlign: "center",
  },
});
