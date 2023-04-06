import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const InputWithIconSec = ({
  img,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputComponent}>
        <Image style={styles.iconSec} source={img} />
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          style={styles.inputDiv}
          //   style={inputstyle} pus this for using style
        />
      </View>
    </View>
  );
};

export default InputWithIconSec;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputComponent: {
    flexDirection: "row",
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
  iconSec: {
    // width: "10%",
    width: 25,
    height: 25,
  },
  inputDiv: {
    // width: "90%",
    paddingLeft: 5,
    paddingRight: 5,
  },
});
