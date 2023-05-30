import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../theme/colors/colors";
import { useNavigation } from "@react-navigation/native";
// import React, { useEffect } from 'react';

const SplaceScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageConteiner}>
        <Image
          style={styles.carrWhiteImg}
          source={require("../../assets/images/carriastic_wihte_logo.png")}
        />
      </View>
    </View>
  );
};

export default SplaceScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple_dark,
    width: '100%',
    height: '100%'
  },
  imageConteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carrWhiteImg: {
  },
});
