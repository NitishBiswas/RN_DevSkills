import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebase } from '../config';
import Button from '../components/button';
import Input from '../components/input';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigateToSignup = () => {
        navigation.navigate('Signup');
    };

    const login = () => {
        setLoading(true);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                setLoading(false);
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    }

    if (loading) {
        return (
            <ActivityIndicator />
        )
    }

    return (
        <SafeAreaView>
            <View>
                <Image
                    source={require('../../assets/login.png')}
                    style={styles.imageView}
                />
                <Text style={styles.textHeading}>Never forget your notes</Text>
                <View style={styles.inputView}>
                    <Text style={styles.text}>Email</Text>
                    <Input onChangeText={text => setEmail(text)} />
                    <Text style={styles.text}>Password</Text>
                    <Input onChangeText={text => setPassword(text)} secureTextEntry={true} />
                    <Button title="Login" customStyle={styles.buttonStyle} onPress={login} />
                    <TouchableOpacity
                        onPress={navigateToSignup}
                        style={styles.signupLink}>
                        <Text style={styles.textStyle}>
                            Don't have an account?
                            <Text style={styles.signupText}>  Signup</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar
                animated={true}
                backgroundColor="#171818"
                barStyle="light-content"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imageView: {
        alignSelf: 'center',
    },
    textHeading: {
        fontWeight: 'bold',
        fontSize: 23,
        alignSelf: 'center',
    },
    inputView: {
        margin: 25,
    },
    buttonStyle: {
        marginTop: 35,
        alignSelf: 'center',
    },
    signupLink: {
        marginTop: 25,
    },
    textStyle: {
        alignSelf: 'center',
    },
    signupText: {
        fontWeight: 'bold',
        color: '#18818D',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#3A4374',
        lineHeight: 20,
        marginBottom: 10
    }
});
