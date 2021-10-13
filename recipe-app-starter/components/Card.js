import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'

export default function Card({ item }) {
    return (
        <View style={styles.cardView}>
            <Image source={{uri: item.imageURL}} style={styles.imageView} />
            <Text style={styles.titleText}>{item.name}</Text>
            <FlatList
                data={item.ingredients}
                renderItem={({ item, index }) => {
                    return (
                        <Text style={styles.descriptionText}>{ index + 1} - { item.quantity} {item.name}</Text>
                    )
                }}
                keyExtractor={(item) => item.name}
                style={styles.descriptionTextView}
            />
            <Text style={styles.titleText}>Step by step guidlines</Text>
            <View style={styles.descriptionTextView}>
                {item.steps.map((step, key) => (<Text key={key} style={styles.descriptionText}>{key + 1} - {step}</Text>))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        borderRadius: 20,
        overflow: "hidden",
        alignSelf: "center",
        marginBottom: 20,
        elevation: 4,
        width: 370,
    },
    imageView: {
        height: 200,
        width: 370,
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        paddingLeft: 10,
        paddingBottom: 10,
    },
    descriptionText: {
        fontSize: 16,
    },
    descriptionTextView: {
        paddingLeft: 10,
        paddingBottom: 20,
    }
})
