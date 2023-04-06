import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DashboardScreen from './src/screen/DashboardScreen';
import ProfileTopBar from './components/ProfileTopBar';
import UserProfileScreen from './src/screen/UserProfileScreen';
import EditProfileScreen from './src/screen/EditProfileScreen';
import SignUpScreen from './src/screen/SignUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <DashboardScreen /> */}
      {/* <UserProfileScreen /> */}
      {/* <EditProfileScreen /> */}
      <SignUpScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 10,
    marginTop: 10,
  },
});
