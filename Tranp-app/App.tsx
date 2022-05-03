import React from "react";
import { StatusBar } from 'react-native';
import { Login } from "./src/pages/Login";
import { HomeScreen } from "./src/pages/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";

const Stack = createNativeStackNavigator();

export default function App() {
  


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#121015',
          },
          headerTintColor: 'white'
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginNavigate}
          options={{ title: 'Faculdade F5' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeNavigate}
          options={{ title: "Rotas" }}
        />
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