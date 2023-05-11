import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { useState } from "react";

export default function Cart() {
    const [mostrarCart, setMostrarCart] = useState(false);
    return (
        <>
            {mostrarCart === true
                ? (
                    <View style={styles.container} >
                        <Text style={styles.preco} >
                            0.00
                        </Text>
                    </View>
                )
                : (
                    <View style={styles.texto} >
                        <Text>Escondido</Text>
                    </View>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        padding: 10,
        flex: 1,
        top: '10px',
        left: '10px',
        position: 'fixed',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
    },
    preco: {
        color: '#f1f1f1'
    },
})