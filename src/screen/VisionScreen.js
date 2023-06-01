import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import HomeIconButton from "../../components/buttons/HomeIconButton";
import HeaderSection from "../../components/HeaderSection";
import { Colors } from "../theme/colors/colors";

const VisionScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <HeaderSection
        // onPress={() => navigation.navigate("UserProfileScreen")}
        tittle="Vision"
      />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require("../../assets/images/carriastic_wihte_logo.png")}
            style={styles.logo}
            resizeMode="center"
          />
          <Text style={styles.title}>Our Vision</Text>
          <Text style={styles.description}>
          Our vision is to create a sustainable qualified human resource to reduce the unemployment problem nationally and globally. Though initially we are trying to reduce the unemployment problem in Bangladesh, we will expand our network to an international level. We will ensure local employment, global employment, and remote jobs as well. Moreover, our organization will create a positive effect on the global or local environment, community, society, or economy.
          </Text>
        </View>
        <View style={styles.homeLink}>
          <HomeIconButton
            onPress={() => navigation.navigate("DashboardScreen")}
            img={require("../../assets/icons/small_homeIcon.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.light_purple, 
        width: '100%',
        height: '100%'
    },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  topContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: 'bold',
    color: Colors.white,
  },
  bottomImage: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default VisionScreen;
