import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()
import Inicio from './sources/screens/inicio.screen'
import Quiz from './sources/screens/quiz.screen'
import Resultados from './sources/screens/results.screen'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name='Pagina Inicial'
            component={Inicio}
            options={{headerShown: false}}
          />

        <Stack.Screen 
          name='Quiz'
          component={Quiz}
          options={{headerShown: false}}
        />
        
        <Stack.Screen 
          name='Resultados'
          component={Resultados}
          options={{headerShown: false}}
        />

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
