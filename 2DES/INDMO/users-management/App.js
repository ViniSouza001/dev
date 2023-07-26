import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenList from './sources/components/listUsers';
import InfoUser from './sources/components/InfoUser';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen
            name='ListUsers'
            component={ScreenList}
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
