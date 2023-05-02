import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginEconomia from './components/loginEconomia';
import ScreenEconomia from './components/FormEconomia';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Login'
        component={LoginEconomia}
        options={{ title: 'Welcome' }} />

        <Stack.Screen 
        name='TelaEconomia'
        component={ScreenEconomia}
        options={{ title: 'Tela de economia' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
