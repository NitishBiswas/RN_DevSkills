import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function Input({placeholder, onChangeText}) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        marginBottom: 16,
    }
})
