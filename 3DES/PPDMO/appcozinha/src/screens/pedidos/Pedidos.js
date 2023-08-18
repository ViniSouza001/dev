import React from "react";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native"
import styles from "./style";

export default function PedidosScreen() {

    const [pedidos, setPedidos] = useState([])

    console.log(pedidos)

    const uri = 'http://localhost:8081'
    useEffect(() => {
        fetch(uri + '/listarPedidos', { method: 'GET' })
            .then(response => response.json())
            .then(data => { // chega todos os pedidos em um vetor
                setPedidos(data);
                console.log(data) // [{item, idCliente, idPedido}, {item, idCliente, idPedido}]
            })
    }, []); // O array vazio indica que o efeito deve ser executado apenas uma vez, na montagem do componente


    return (
        <View>
            <Image source={require('../../../assets/Fundo.png')} style={styles.fundo} />
            <View style={styles.container}>
                <FlatList
                    data={pedidos}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.tituloPedido}>Pedido #{item.idPedido}</Text>
                            <Text>Hora da solicitação: {item.dataPedido}</Text>
                            <Text>item.itens</Text>

                        </View>
                    )}
                />

            </View>
        </View>
    )
}