import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserIconImageLink = ({ navigation }) => {
  return (
    <>
      <Pressable onPress={() => navigation.navigate("UserProfileScreen")}>
        <Image
          style={styles.userImg}
          source={require("../../assets/images/user.png")}
        />
      </Pressable>
    </>
  );
};

export default UserIconImageLink;

const styles = StyleSheet.create({});
