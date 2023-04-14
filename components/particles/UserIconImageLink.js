import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";

const UserIconImageLink = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity 
      onPress={onPress}>
        <Image
          style={styles.userImg}
          source={require("../../assets/images/user.png")}
        />
      </TouchableOpacity>
    </>
  );
};

export default UserIconImageLink;

const styles = StyleSheet.create({});
