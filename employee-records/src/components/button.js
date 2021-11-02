import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button({ title, onPress, customStyle }) {
    return (
        <TouchableOpacity style={[styles.buttonView, customStyle]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        borderRadius: 30,
        height: 45,
        width: 165,
        backgroundColor: '#FFE600',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'black'
    }
})
