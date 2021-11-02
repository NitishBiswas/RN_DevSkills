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
import { firebase } from '../config'
import Button from '../components/button';
import Input from '../components/input';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = () => {
        setLoading(true);
        console.log('Hello');
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log('Error', err);
            })
    }

    return (
        <SafeAreaView>
            <View>
                <View style={styles.inputView}>
                    <Text style={styles.text}>Email</Text>
                    <Input onChangeText={text => setEmail(text)} />
                    <Text style={styles.text}>Password</Text>
                    <Text style={styles.validText}>Must be at least 8 letters</Text>
                    <Input onChangeText={text => setPassword(text)} secureTextEntry={true} />
                    <Text style={styles.text}>Confirm Password</Text>
                    <Text style={styles.validText}>Must match</Text>
                    <Input onChangeText={text => setConfirmPassword(text)} secureTextEntry={true} />
                    {loading ? <ActivityIndicator />
                        : <Button title="Submit" customStyle={styles.buttonStyle} onPress={submit} />
                    }
                    <Text style={styles.termsConditionsText}>
                        By continuing, you accept the{' '}
                        <Text style={styles.termsText}>Terms of Use</Text> and{' '}
                        <Text style={styles.termsText}>Privacy Policy.</Text>
                    </Text>
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
        marginTop: 40,
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
    },
    termsConditionsText: {
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    termsText: {
        color: '#18818D',
    },
    validText: {
        color: '#647196',
        marginBottom: 10,
    }
});
