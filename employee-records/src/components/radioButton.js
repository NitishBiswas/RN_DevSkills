import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function RadioButton({ label, customCircleStyle, customLabelStyle, value, setValue }) {

    return (
        <TouchableOpacity onPress={() => setValue(!value)} style={[styles.circle, value && { backgroundColor: 'black' }]}>
            <Text style={[styles.label, value && { color: 'white' }]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        margin: 5
    },
    label: {
        color: "black",
        fontSize: 11
    }
})
