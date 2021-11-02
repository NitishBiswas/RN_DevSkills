import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { firebase } from '../config'
import { AntDesign } from '@expo/vector-icons';
import Button from '../components/button';

export default function Home({ navigation }) {
    const [employees, setEmployees] = useState([])

    const empRef = firebase.firestore().collection('employees');
    const userId = firebase.auth().currentUser;

    useEffect(() => {
        const subscriber = empRef.where("author", "==", userId.uid).onSnapshot(snapshot => {
            const newEmployees = [];
            snapshot.forEach(employee => {
                newEmployees.push({
                    id: employee.id,
                    ...employee.data()
                })
            })
            setEmployees(newEmployees);
        })
        return subscriber;
    }, [])

    return (
        <SafeAreaView>
            {employees.length === 0 ?
                <View>
                    <View style={styles.headerView}>
                        <Text style={styles.headerTitle1}>My employees</Text>
                    </View>
                    <Image source={require('../../assets/add.png')} alt="Add" style={styles.imageView} />
                    <Text style={styles.text}>Sorry you do not have employees</Text>
                    <Button onPress={() => navigation.navigate('Create')} title="Add an employee" customStyle={styles.button} />
                </View>
                :
                <View>
                    <View style={styles.headerView}>
                        <Text style={styles.headerTitle2}>MY EMPLOYEES</Text>
                        <Pressable onPress={() => navigation.navigate('Create')}>
                            <AntDesign name="pluscircleo" size={24} color="blue" />
                        </Pressable>
                    </View>
                    <View style={styles.listView}>
                        <FlatList
                            data={employees}
                            keyExtractor={(item) => item.image}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.cardView}>
                                        <Image source={{ uri: item.image }} style={styles.imageAvator} />
                                        <View>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <Text style={styles.description}>{item.gender} . {item.age}</Text>
                                            <View style={styles.dayView}>
                                                {item.shifts.map((day, i) => {
                                                    return (
                                                        <View key={i} style={styles.circle}>
                                                            <Text style={styles.label}>{day}</Text>
                                                        </View>
                                                    )
                                                })}

                                            </View>
                                            <View style={styles.border} />
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerView: {
        margin: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle1: {
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 27,
        color: '#333333'
    },
    imageView: {
        height: 200,
        width: 250,
        alignSelf: 'center',
        marginTop: 150
    },
    text: {
        alignSelf: 'center',
        fontSize: 14,
        marginTop: 35
    },
    button: {
        alignSelf: 'center',
        marginTop: 35,
    },
    headerTitle2: {
        fontSize: 24,
        color: '#333333',
    },
    listView: {
        margin: 25,
    },
    dayView: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: 350,
        marginBottom: 10,
    },
    circle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        marginRight: 5,
        backgroundColor: "black",
    },
    label: {
        color: "white",
        fontSize: 11
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333333",
        marginBottom: 3,
    },
    description: {
        fontSize: 14,
        color: "#888888",
        marginBottom: 3,
    },
    cardView: {
        flexDirection: "row",
    },
    imageAvator: {
        height: 68,
        width: 68,
        borderRadius: 34,
        marginRight: 10,
        alignSelf: "center"
    }
})
