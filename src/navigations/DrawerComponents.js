import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const DrawerComponents = (props) => {
    // const navigation = useNavigation();
  return (
    <View>
    <DrawerContentScrollView {...props}>
      {/* Top center logo */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>Your Logo</Text>
      </View>

      {/* Navigation links */}
      <DrawerItemList {...props} />

      {/* Text below social icons */}
      <View style={{ marginTop: 20 }}>
        <Text>Your Text</Text>
      </View>

      {/* Social icons */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <TouchableOpacity>
          <Ionicons name="logo-facebook" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-twitter" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-instagram" size={30} />
        </TouchableOpacity>
      </View>

      {/* Bottom login and home links */}
      <View style={{ marginTop: 'auto' }}>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  </View>
  );
};

export default DrawerComponents;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E'
    },
    logoContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    logoText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    textContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      color: 'gray',
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    socialIcon: {
      marginHorizontal: 10,
    },
    bottomLinksContainer: {
      marginTop: 'auto',
      marginBottom: 20,
    },
    bottomLink: {
      alignItems: 'center',
      marginBottom: 10,
    },
    bottomLinkText: {
      fontSize: 16,
      color: 'purple',
    },
  });
