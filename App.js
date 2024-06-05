import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Header } from '@rneui/themed';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        centerComponent={{ text: 'Shopping', style: styles.headerCenterText }}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenterText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
