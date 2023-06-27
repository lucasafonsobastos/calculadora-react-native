import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 100,
    },
    text: {
        marginTop: 16,
        paddingVertical: 8,
        padding: 100,
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

const Input = ()=> {
    return (
        <View style={styles.container} >
            <Text style={styles.text} > Testando </Text> 
        </View>
    )
}

export default Input;
