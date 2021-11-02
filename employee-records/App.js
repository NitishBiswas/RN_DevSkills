import React, { useEffect, useState } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from './src/config';
import Home from './src/screens/home';
import Login from './src/screens/login';
import Create from './src/screens/create';
import Signup from './src/screens/signup';

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  function authStateChange(user) {
    setUser(user);
    setLoading(false);
  }

  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged(authStateChange);
    return subscribe;
  }, [])

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {
          user ? (
            <>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              <Stack.Screen name="Create" component={Create} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Signup" component={Signup} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
