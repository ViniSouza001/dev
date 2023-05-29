import ListUsers from '../components/listUsers';
import { View, Text } from 'react-native-web';

export default function ScreenList() {
    return (
        <View>
            <Text>Lista de usuários</Text>
            <ListUsers/>
        </View>
    )
}