import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function Input({ onChangeText, secureTextEntry }) {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 16,
        backgroundColor: '#F7F8FD',
        borderRadius: 5
    }
})
