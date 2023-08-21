import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login/Login';
import PedidosScreen from './src/screens/pedidos/Pedidos'

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* { headerShown: false } esconde o header das telas */}
        {/* <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{ title: 'Login' }}
        /> */}
        <Stack.Screen
          name='PedidosScreen'
          component={PedidosScreen}
          options={{ title: 'Pedidos' }}
        />

      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>

  );
}
