import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../../src/theme/colors/colors";

const SimpleInputSec = ({
  lable,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.lableText}>{lable}</Text>
      <View style={styles.inputConteiner}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          style={styles.inputstyle}
          //   style={inputstyle} pus this for using style
        />
      </View>
    </View>
  );
};

export default SimpleInputSec;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
  },
  lableText: {
    fontWeight: 400,
    fontSize: 16,
    marginBottom: 9,
    color: Colors.black,
    fontWeight: "bold",
  },
  inputConteiner: {
    marginBottom: 15,
  },
  inputstyle: {
    borderColor: Colors.border_color,
    borderWidth: 1,
    paddingVertical: 8,
    paddingLeft: 20,
    width: 330,
    paddingRight: 15,
    borderRadius: 8,
  },
});
