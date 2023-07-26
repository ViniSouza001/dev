import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Salvos from './screens/salvos';
import Destaques from './screens/destaques';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function Routes() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#ccc',
                borderTopWidth: 0,

                bottom: Platform.OS === 'android' ? 14 : 28,
                left: 14,
                right: 14,
                borderRadius: 4,
                height: 60,
            }
        }}
        >
            {/* cada tab.screen é uma screen (tela) */}
            <Tab.Screen
            name='Destaques'
            component={Destaques}
            options={{
                tabBarIcon: ({focused, size, color}) => {
                    if(focused) {
                        return <Ionicons
                        name='home'
                        color={color}
                        size={size} />
                    }
                    else {
                        return <Ionicons
                        name='home-outline'
                        color={color}
                        size={size}
                        />
                    }
                }
            }}
            />
            <Tab.Screen
            name="Salvos"
            component={Salvos}
            options={{
                tabBarIcon: ({focused, color, size}) => {
                    if(focused) {
                        return(
                            <Ionicons
                                name='bookmark'
                                size={size}
                                color={color} 
                            />
                        )
                    }
                    else {
                        return (
                            <Ionicons
                                name='bookmark-outline'
                                size={size}
                                color={color}
                            />
                        )
                    }
                }
            }}
            />
        </Tab.Navigator>
    )
}