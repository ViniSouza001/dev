import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './components/loginForm';
import ScreenIMC from './components/FormIMC';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Provider
    <NavigationContainer>
      {/* Container de navegação */}
      <Stack.Navigator>

        {/* Telas */}
        <Stack.Screen 
          name="Login"
          component={LoginForm}
          options={{title: 'Bem vindo'}} />

          <Stack.Screen
          name="TelaImc"
          component={ScreenIMC}
          options={{ title: 'Tela IMC'}} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
