import { StyleSheet } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientesScreen from './sources/screens/clienteScreen';
import DetalhesScreen from './sources/screens/detalhesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='ClientesScreen'
        component={ClientesScreen}
        options={{title: 'Lista de clientes'}} />
        <Stack.Screen
        name='Detalhes'
        component={DetalhesScreen}
        options={{title: 'Detalhes do cliente'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}