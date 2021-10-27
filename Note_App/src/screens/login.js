import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/button';
import Input from '../components/input';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigateToSignup = () => {
        navigation.navigate('Signup');
    };
    return (
        <SafeAreaView>
            <View>
                <Image
                    source={require('../../images/login.png')}
                    style={styles.imageView}
                />
                <Text style={styles.textHeading}>Never forget your notes</Text>
                <View style={styles.inputView}>
                    <Input placeholder="Email" onChangeText={text => setEmail(text)} />
                    <Input placeholder="Password" onChangeText={text => setPassword(text)} />
                    <Button title="Login" customStyle={styles.buttonStyle} />
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
                backgroundColor="white"
                barStyle="dark-content"
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
});
