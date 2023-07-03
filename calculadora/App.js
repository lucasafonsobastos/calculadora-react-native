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
      <View style={styles.numberLine}>
        <Buton title="7" onPress={() => handlePress('7')} />
        <Buton title="8" onPress={() => handlePress('8')} />
        <Buton title="9" onPress={() => handlePress('9')} />
        <Buton title="/" onPress={() => handlePress('/')} />
      </View>
      <View style={styles.numberLine}>
        <Buton title="4" onPress={() => handlePress('4')} />
        <Buton title="5" onPress={() => handlePress('5')} />
        <Buton title="6" onPress={() => handlePress('6')} />
        <Buton title="*" onPress={() => handlePress('*')} />
      </View>
      <View style={styles.numberLine}>
        <Buton title="1" onPress={() => handlePress('1')} />
        <Buton title="2" onPress={() => handlePress('2')} />
        <Buton title="3" onPress={() => handlePress('3')} />
        <Buton title="-" onPress={() => handlePress('-')} />
      </View>
      <View style={styles.numberLine}>
        <Buton title="AC" onPress={() => handlePress('AC')} />
        <Buton title="0" onPress={() => handlePress('0')} />
        <Buton title="." onPress={() => handlePress('.')} />
        <Buton title="+" onPress={() => handlePress('+')} />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  numberLine: {
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }

});