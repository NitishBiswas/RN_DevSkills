import React, { useState } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Login from './src/screens/login';
import Create from './src/screens/create';
import Signup from './src/screens/signup';
import Update from './src/screens/update';

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

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {
          user ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Create" component={Create} />
              <Stack.Screen name="Update" component={Update} />
            </>
          ) : (
              <>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Signup" component={Signup} /> 
             </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
