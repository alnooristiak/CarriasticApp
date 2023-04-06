import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LogoImage = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo.png")}/>
    </View>
  )
}

export default LogoImage

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
    }
})