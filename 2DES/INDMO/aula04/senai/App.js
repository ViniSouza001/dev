import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './source/screens/home';
import CursosEad from './source/screens/cursosEad';
import CursosIndustriais from './source/screens/cursosIndustrial';
import CursosTecnicos from "./source/screens/cursosTecnicos";
import Detalhes from './source/screens/DetalhesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Página inicial"
        component={HomeScreen}
        options={{title: '', headerTransparent: true}} />

        <Stack.Screen
        name="Cursos formação inicial e continuada"
        component={CursosEad}
        options={{title: 'Cursos EAD'}} />

        <Stack.Screen
        name="Cursos Industriais"
        component={CursosIndustriais}
        options={{title: 'Cursos de Aprendizagem Industrial'}} />

        <Stack.Screen
        name="Cursos Técnicos"
        component={CursosTecnicos}
        options={{title: 'Cursos Técnicos'}}
        />

        <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{title: 'Informações do curso'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}