import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Cart() {
    const [mostrarCart, setMostrarCart] = useState(false);
    // pega os precos do locastorage
    const precos = window.localStorage.getItem('precos');
    // converte em um array
    const precosConvertido = precos.split(',');
    let total = 0;
    // calcula o total percorrendo o array
    precosConvertido.forEach(item => total += Number(item));
    
    // altera o estado de mostrar o preco do carrinho
    //se for true altera para false e vice-versa
    const toggleMostrarCart = () => setMostrarCart(!mostrarCart);

    const clearCart = () => {
        window.localStorage.setItem("precos", 0);
        toggleMostrarCart();
    }

    return (
        <>
            {mostrarCart &&
                (
                    <View style={styles.container} >
                        <Text style={styles.clear} onPress={clearCart}>X</Text>
                        <Text onPress={toggleMostrarCart}
                            style={styles.preco}>
                            R${total}.00
                        </Text>
                    </View>
                )
            }
            {
                !mostrarCart && (
                    <View style={styles.containerDois}>
                        <Text onPress={toggleMostrarCart}>
                            <Ionicons
                                name={'cart'}
                                size={20}
                            color={'white'}
                            />
                        </Text>
                    </View>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 40,
        padding: 10,
        flex: 1,
        top: '10px',
        borderRadius: 10,
        flexDirection: 'row',
        right: '-10px',
        position: 'fixed',
        backgroundColor: 'orange',
        justifyContent: 'center',
        zIndex: 999,
        gap: 10,
    },
    preco: {
        color: '#f1f1f1',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerDois: {
        width: 60,
        height: 40,
        padding: 10,
        borderRadius: 10,
        flex: 1,
        top: '10px',
        right: -10,
        position: 'fixed',
        backgroundColor: 'orange',
        zIndex: 999,
    },
    icon: {
        borderRadius: '50%',
        color: '#f1f1f1',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
})