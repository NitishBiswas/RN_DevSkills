import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../config'
import Input from '../components/input';
import Button from '../components/button';
import RadioButton from '../components/radioButton';

export default function Create({ navigation }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState(null);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [sat, setSat] = useState(false);
    const [sun, setSun] = useState(false);
    const [mon, setMon] = useState(false);
    const [tue, setTue] = useState(false);
    const [wed, setWed] = useState(false);
    const [thu, setThu] = useState(false);
    const [fri, setFri] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);

    useEffect(() => {
        if (sat) {
            setSelectedDays([...selectedDays, 'Sat'])
        } if (sun) {
            setSelectedDays([...selectedDays, 'Sun'])
        } if (mon) {
            setSelectedDays([...selectedDays, 'Mon'])
        } if (tue) {
            setSelectedDays([...selectedDays, 'Tue'])
        } if (wed) {
            setSelectedDays([...selectedDays, 'Wed'])
        } if (thu) {
            setSelectedDays([...selectedDays, 'Thu'])
        } if (fri) {
            setSelectedDays([...selectedDays, 'Fri'])
        }
    }, [sat, sun, mon, tue, wed, thu, fri])

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const onCreate = () => {
        setLoading(true);
        const userId = firebase.auth().currentUser;
        console.log(userId.uid);
        console.log(selectedDays);
        const empRef = firebase.firestore().collection('employees');

        const timestamp = firebase.firestore.FieldValue.serverTimestamp();

        const data = {
            name,
            age,
            gender,
            shifts: selectedDays,
            createAt: timestamp,
            author: userId.uid,
            image,
        }
        empRef.add(data).then((response) => {
            setLoading(false);
            navigation.navigate('Home');
        }).catch((error) => { })
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Inages,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.onerror = function () {
                    reject(new TypeError("Network request failed"));
                };
                xhr.responseType = "blob";
                xhr.open("GET", result.uri, true);
                xhr.send(null);
            })

            const ref = firebase.storage().ref().child(new Date().getTime().toString())
            const snapshot = await ref.put(blob);
            blob.close();
            const url = await snapshot.ref.getDownloadURL();
            setImage(url);
        }
    };

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headerTitle}>Create Employee</Text>
                <Pressable onPress={pickImage} style={styles.circleView}>
                    {image ? <Image source={{ uri: image }} style={[styles.circleView, { resizeMode: 'cover' }]} /> : <AntDesign name="plus" size={35} color="black" />}

                </Pressable>
                <View style={styles.inputView}>
                    <Text style={styles.text}>Name</Text>
                    <Input onChangeText={text => setName(text)} />
                    <Text style={styles.text}>Age</Text>
                    <Input onChangeText={text => setAge(text)} />

                    <View style={styles.genderView}>
                        <TouchableOpacity
                            onPress={() => setGender('Male')}
                            style={styles.radioButton}>
                            <View
                                style={[
                                    styles.circle,
                                    gender === 'Male' && { borderColor: 'green' },
                                ]}>
                                <View
                                    style={[
                                        styles.miniCircle,
                                        gender === 'Male' && {
                                            backgroundColor: 'green',
                                            borderRadius: 10,
                                        },
                                    ]}
                                />
                            </View>
                            <Text style={styles.genderTitle}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setGender('Female')}
                            style={styles.radioButton}>
                            <View
                                style={[
                                    styles.circle,
                                    gender === 'Female' && { borderColor: 'green' },
                                ]}>
                                <View
                                    style={[
                                        styles.miniCircle,
                                        gender === 'Female' && {
                                            backgroundColor: 'green',
                                            borderRadius: 10,
                                        },
                                    ]}
                                />
                            </View>
                            <Text style={styles.genderTitle}>Female</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Select shifts</Text>
                    <Text style={styles.subTitle}>You can choose multiple days</Text>
                    <View style={styles.radioButtonView}>
                        <RadioButton label="Sat" value={sat} setValue={setSat} id="0" />
                        <RadioButton label="Sun" value={sun} setValue={setSun} id="1" />
                        <RadioButton label="Mon" value={mon} setValue={setMon} id="2" />
                        <RadioButton label="Tue" value={tue} setValue={setTue} id="3" />
                        <RadioButton label="Wed" value={wed} setValue={setWed} id="4" />
                        <RadioButton label="Thu" value={thu} setValue={setThu} id="5" />
                        <RadioButton label="Fri" value={fri} setValue={setFri} id="6" />
                    </View>
                    {loading ? <ActivityIndicator /> : <Button title="Create" customStyle={styles.buttonStyle} onPress={onCreate} />}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        margin: 25,
    },
    circleView: {
        height: 78,
        width: 78,
        borderRadius: 39,
        backgroundColor: '#E3E3E3',
        alignSelf: 'center',
        margin: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        margin: 25,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#3A4374',
        lineHeight: 20,
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 35,
        alignSelf: 'center',
    },
    genderView: {
        marginTop: 25,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        width: 80,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    genderTitle: {
        fontSize: 20,
        color: 'black',
    },
    miniCircle: {
        height: 10,
        width: 10,
    },
    title: {
        fontSize: 14,
        color: '#333333',
        fontWeight: '600',
        marginTop: 14,
    },
    subTitle: {
        fontSize: 12,
        color: '#333333',
        fontWeight: '600',
        marginTop: 5,
    },
    radioButtonView: {
        marginTop: 10,
        flexDirection: 'row',
    }
})
