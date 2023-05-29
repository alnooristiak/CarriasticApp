import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors, BtnColler } from "../theme/colors/colors";

const DrawerComponents = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        {/* Top center logo */}
        <View style={styles.logoContainer}>
          <Image
            style={styles.carrWhiteImg}
            resizeMode="contain"
            source={require("../../assets/images/mini_w_logo.png")}
          />
        </View>

        {/* Navigation links */}
        <DrawerItemList {...props} />

        {/* Text below social icons */}
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.linkRapper}>
          <Image
            style={styles.textLinkIcon}
            resizeMode="contain"
            source={require("../../assets/icons/drawer_icon/about.png")}
          />
            <Text style={styles.linkText}>About Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkRapper}>
          <Image
            style={styles.textLinkIcon}
            resizeMode="contain"
            source={require("../../assets/icons/drawer_icon/team.png")}
          />
            <Text style={styles.linkText}>Our Team</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkRapper}>
          <Image
            style={styles.textLinkIcon}
            resizeMode="contain"
            source={require("../../assets/icons/drawer_icon/mission.png")}
          />
            <Text style={styles.linkText}>Mission</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkRapper}>
          <Image
            style={styles.textLinkIcon}
            resizeMode="contain"
            source={require("../../assets/icons/drawer_icon/vission.png")}
          />
            <Text style={styles.linkText}>Vision</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkRapper}>
          <Image
            style={styles.textLinkIcon}
            resizeMode="contain"
            source={require("../../assets/icons/drawer_icon/contact.png")}
          />
            <Text style={styles.linkText}>Contact</Text>
          </TouchableOpacity>
        </View>

        {/* Social icons */}
        <View>
          <Text style={styles.followText}>Follow Us</Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialIcon}>
            <Image
            style={styles.carrWhiteImg}
            resizeMode="contain"
            source={require("../../assets/icons/social/linkedin.png")}
          />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialIcon}>
            <Image
            style={styles.carrWhiteImg}
            resizeMode="contain"
            source={require("../../assets/icons/social/facebook.png")}
          />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialIcon}>
            <Image
            style={styles.carrWhiteImg}
            resizeMode="contain"
            source={require("../../assets/icons/social/instra.png")}
          />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.carrWhiteImg}
            resizeMode="contain"
            source={require("../../assets/icons/qrCode.png")}
          />
                <Text style={{color: "white"}}>www.carriastic.com</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom login and home links */}
        <View style={styles.bottomLinksContainer}>
          <TouchableOpacity style={styles.bottomLink}>
            <Text style={styles.bottomLinkText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomLink}>
            <Text style={styles.bottomLinkText}>Login</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BtnColler.dark_btn,
    padding: 10,
  },
  logoContainer: {
    justifyContent: "flex-start",
    marginTop: 20,
    marginBottom: 20
  },
  carrWhiteImg: {},
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    // marginTop: 5,
  },
  linkRapper: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textLinkIcon: {
    marginRight: 40
  },
  linkText: {
    fontSize: 16,
    color: "white",
  },
  followText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
    marginTop: 30
  }, 
  socialContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  socialIcon: {
    marginRight: 15,
  },
  bottomLinksContainer: {
    marginBottom: -10
  },
  bottomLink: {
    marginBottom: 10,
  },
  bottomLinkText: {
    fontSize: 24,
    fontWeight: 400,
    color: Colors.white,
  },
});

export default DrawerComponents;
