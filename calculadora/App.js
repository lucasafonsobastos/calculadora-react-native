import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

import Input from './src/components/Input';
import Buton from './src/components/Button';

export default function App() {

  const [numero, setNum] = useState('0');

  const handlePress = (num) => {
    console.log('Botão pressionado!');
    setNum(numero+num);
  };

  return (
    <View style={styles.container}>
      <Input value={numero}/>
      <Buton title="1" onPress={() => handlePress('1')} />
      <Buton title="0" onPress={() => handlePress('0')} />
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