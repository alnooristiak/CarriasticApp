import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderSection from './components/HeaderSection';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>all the best for your future</Text>
      <StatusBar style="auto" />
      <HeaderSection tittle='Dashboard' />
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
