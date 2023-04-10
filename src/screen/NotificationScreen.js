import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderSection from '../../components/HeaderSection'
import HomeIconButton from '../../components/buttons/HomeIconButton'
import NotifiText from '../../components/particles/NotifiText'
import { Colors } from '../theme/colors/colors'

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderSection tittle="Notification" />

      <View style={styles.notifiTextContainer}>
          <View style={styles.notifiTextSec}>
            <NotifiText 
            bgColor={Colors.green}
            tittle='Your application for leave absence has been accepted' 
            />
          </View>

          <View style={styles.notifiTextSec}>
            <NotifiText 
            bgColor={Colors.purple_mid_dark}
            tittle='Your application for leave absence has been accepted' 
            />
          </View>

          <View style={styles.notifiTextSec}>
            <NotifiText 
            bgColor={Colors.border_color}
            tittle='HR has viewed your leave application' 
            />
          </View>

          <View style={styles.notifiTextSec}>
            <NotifiText 
            bgColor={Colors.green}
            tittle='Your application for leave absence has sent to HR' 
            />
          </View>

          <View style={styles.notifiTextSec}>
            <NotifiText 
            bgColor={Colors.purple_mid_dark}
            tittle='Your requisition request has been accepted' 
            />
          </View>

          <View style={styles.notifiTextSec}>
            <NotifiText 
            bgColor={Colors.border_color}
            tittle='Your requisition request has sent to admin' 
            />
          </View>
      </View>

      <View style={styles.homeLink}>
        <HomeIconButton
          img={require("../../assets/icons/small_homeIcon.png")}
        />
      </View>

    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  notifiTextContainer: {
    width: '98%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 24
  },
  notifiTextSec: {
    marginBottom: 20
  }
})