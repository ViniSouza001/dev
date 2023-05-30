import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListUsers from './sources/screens/list.js';
import InfoUser from './sources/screens/user.js';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name='ListUsers'
          component={ListUsers}
          options={{ title: 'Usuários' }}
        />
        <Stack.Screen
          name='Informacoes'
          component={InfoUser}
          options={{ title: 'Informações' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
