import react from "react"
import { Text, View, TouchableOpacity, Image } from "react-native"
import styles from './styles'
function HomeScreen({ navigation }) {

    function navegacao() {
        navigation.navigate('PedidosScreen')
    }

    return (
        <View>
            <Text>App rodando</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.loginTxt} onPress={() => { navegacao() }}>Pedidos</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen