import react from "react"
import { Text, View, TouchableOpacity, Image, ImageBackground } from "react-native"
import styles from './styles'
function HomeScreen ({ navigation }) {

    function navegacao () {
        navigation.navigate('PedidosScreen')
    }

    return (
        <View>
            <ImageBackground
                source={require('../../../assets/Fundo.png')}
                style={styles.background}>
                <Image source={require('../../../assets/Chapeu.png')} style={styles.chapeu} />
                <Text style={styles.logo}>Vinici'os</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.loginTxt} onPress={() => { navegacao() }}>Pedidos</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen