import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, StyleSheet, SafeAreaView, Platform } from 'react-native'

export default function Header({title}) {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: 'tomato',
        width: '100%',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? 50 : null,
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 28
    }
})
