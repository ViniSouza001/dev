import React from "react";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, Pressable } from "react-native"
import styles from "./style";
import Itens from '../../components/Itens'

export default function PedidosScreen({ navigation }) {

    const [pedidos, setPedidos] = useState([])
    const [loading, setLoading] = useState(true)

    const uri = 'http://localhost:8081'
    useEffect(() => {
        fetch(uri + '/listarPedidos', { method: 'GET' })
            .then(response => response.json())
            .then(data => { // chega todos os pedidos em um vetor
                setPedidos(data);
                setLoading(false)
                // console.log(pedidos) // [{item, idCliente, idPedido}, {item, idCliente, idPedido}]
            })

    }, []); // O array vazio indica que o efeito deve ser executado apenas uma vez, na montagem do componente



    if (loading) {
        return (
            <View>
                <Image source={require('../../../assets/Fundo.png')} style={styles.fundo} />
                <Text style={styles.vermelho}>Carregando...</Text>
            </View>
        )
    }

    return (
        <View style={styles.body}>
            <Image source={require('../../../assets/Fundo.png')} style={styles.fundo} />
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image source={require('../../../assets/capacete.png')} style={styles.capacete} />
                    <Itens pedidos={pedidos} />

                </View>
            </View>
        </View>
    )
}