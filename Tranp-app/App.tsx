import React from "react";
import { StatusBar } from 'react-native';
import { Login } from "./src/pages/Login";
import { HomeScreen } from "./src/pages/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginNavigate} />
        <Stack.Screen name="Home" component={HomeNavigate} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function LoginNavigate() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Login />
    </>
  )
}

function HomeNavigate() {
  return (
    <HomeScreen />
  )
}