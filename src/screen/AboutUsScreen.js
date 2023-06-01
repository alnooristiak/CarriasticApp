import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import HomeIconButton from "../../components/buttons/HomeIconButton";
import HeaderSection from "../../components/HeaderSection";
import { Colors } from "../theme/colors/colors";

const AboutUsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <HeaderSection
        // onPress={() => navigation.navigate("UserProfileScreen")}
        tittle="About Us"
      />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require("../../assets/images/carriastic_wihte_logo.png")}
            style={styles.logo}
            resizeMode="center"
          />
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.description}>
            Carriastic is trying to solve the Unemployment problem initially in
            Bangladesh and later on globally. We are basically a job placement
            platform for graduates and understudies, especially focusing on
            their careers to ensure job placement in the competitive job market.
            Carriastic is the bridge between job seekers and employers. Job
            seekers will find their desired jobs, and employers will get
            qualified employees without hassle. Our main motto is to create
            quality human resources for companies. We ensure the quality of our
            candidates through various training and skill development programs.
            We run these training programs with our trainers, enhancing the
            skills and quality of our human resources. This not only increases
            the productivity of companies but also reduces the unemployment
            problem in Bangladesh.
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

export default AboutUsScreen;
