import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const InfoIconLink = ({ onPress, img }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image style={styles.iconImg} source={img} />
    </Pressable>
  )
}

export default InfoIconLink

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})