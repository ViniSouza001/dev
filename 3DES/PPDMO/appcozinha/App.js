import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/home/HomeScreen'
import PedidosScreen from './src/screens/pedidos/PedidosScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='HomeScreen'
          options={{ title: 'Página inicial' }}
          component={HomeScreen}
        />

        <Stack.Screen
          name='PedidosScreen'
          options={{ title: 'Página de pedidos' }}
          component={PedidosScreen}
        />
      </Stack.Navigator>
      <StatusBar />
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
