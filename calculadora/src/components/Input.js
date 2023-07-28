import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
        height: 120,
        margin: 10,
        borderWidth: 2,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#0019',
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'end',
        
    }
});

const Input = ({value})=> {
    return (
        <View style={styles.container} >
            <Text style={styles.text} > {value} </Text> 
        </View>
    )
}

export default Input;
