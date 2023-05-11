import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();
import Salvos from './screeens/salvos.js'
import Destaques from './screeens/destaques.js';

export default function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='Destaques'
                component={Destaques}
            />
            <Tab.Screen
                name='Salvos'
                component={Salvos}
            />
        </Tab.Navigator>
    )
}