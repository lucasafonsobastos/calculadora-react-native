import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Input from './src/components/Input';
import Buton from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
      <Buton title="1" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
