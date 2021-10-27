import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from '../components/button';
import Input from '../components/input';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [image, setImage] = useState('');
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.imagePickerView}>
                    <FontAwesome name={'plus'} size={40} color="#ccc" />
                </TouchableOpacity>
                <Input placeholder="Email" onChangeText={text => setEmail(text)} />
                <Input
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                />
                <Input placeholder="Full name" onChangeText={text => setName(text)} />
                <Input placeholder="Age" onChangeText={text => setAge(text)} />
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
                <Button title="Submit" customStyle={styles.buttonStyle} />
                <Text style={styles.termsConditionsText}>
                    By continuing, you accept the{' '}
                    <Text style={styles.termsText}>Terms of Use</Text> and{' '}
                    <Text style={styles.termsText}>Privacy Policy.</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 25,
    },
    imagePickerView: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: '#ccc',
        alignSelf: 'center',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
    buttonStyle: {
        marginTop: 35,
        alignSelf: 'center',
    },
    termsConditionsText: {
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    termsText: {
        color: '#18818D',
    },
});
