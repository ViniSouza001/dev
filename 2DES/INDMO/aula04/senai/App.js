import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './source/screens/home';
import CursosEad from './source/screens/cursosEad';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Página inicial"
        component={HomeScreen}
        options={{title: 'Página inicial'}} />
        <Stack.Screen
        name="Cursos EAD"
        component={CursosEad}
        options={{title: 'Cursos EAD'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}