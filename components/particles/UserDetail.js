import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../src/theme/colors/colors'

const UserDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStMain}>Md. Rafidul Islam</Text>

      <Text style={styles.textStSecondery}>ID:     202210001</Text>

      <Text style={styles.textStMain}>Chief Executive Officer</Text>

      <Text style={styles.textStSecondery}>Department:  Admin</Text>

      <Text style={styles.textStMain}>rafid@carriastic.com</Text>

      <Text style={styles.textStSecondery}>+880 1850700054</Text>
      
      <Text style={styles.textStMain}>Blood Group: A -ve</Text>
    </View>
  )
}

export default UserDetail

const styles = StyleSheet.create({
    container: {
        marginTop: 130,
        alignSelf: 'center'
    },
    textStMain: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.black,
        marginBottom: 10
    },
    textStSecondery: {
        fontSize: 25,
        color: Colors.black,
        marginBottom: 10
    }
})