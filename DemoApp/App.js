import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image source={require('./assets/nitish-profile.png')} style={ styles.profile} />
      <TextInput
        style={styles.inputView}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email"
        placeholderTextColor='white'
      />
      <TextInput
        style={styles.inputView}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your password"
        placeholderTextColor='white'
      />
      <TouchableOpacity>
        <Text style={styles.loginBtn}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14279B",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    height: 40,
    width: "70%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 15,
    color: "white",
    borderColor: "white",
    marginBottom: 20,
  },
  loginBtn: {
    fontSize: 20,
    color: '#14279B',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 60,
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  profile: {
    height: 180,
    width: 180,
    marginBottom: 40,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 90,
  }
});
