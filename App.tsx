import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ClassScreen from './src/screens/ClassScreen';
import ScanScreen from './src/screens/ScanScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';

import { RootStackParamList } from './src/navigation/types';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ClassScreen" component={ClassScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
