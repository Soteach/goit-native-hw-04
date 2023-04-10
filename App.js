import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{ headerShown: false }}
            name={'Login'}
            component={LoginScreen}
          />
          <AuthStack.Screen
            name={'Register'}
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    </>
  );
}
