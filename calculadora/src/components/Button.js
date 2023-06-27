import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 0,
    },
    text: {
        width: 80,
        heigth: 80,
        borderWidth: 2,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#0019',
        color: '#FFF',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

const Buton = ({onPress, title})=> {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text} >{title}</Text>
        </TouchableOpacity> 
    )
}

export default Buton;

