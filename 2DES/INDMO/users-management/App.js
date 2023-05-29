import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenList from './sources/screens/list.js';
import ScreenUser from './sources/screens/user.js';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='ListUsers'
        component={ScreenList}
        options={{title: 'Usuários'}}
        />
        <Stack.Screen
          name='Informações'
          component={ScreenUser}
          options={{title: 'Informações'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}