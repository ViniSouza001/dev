import React from "react";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from "react-native"
import styles from "./style";

export default function PedidosScreen () {

    const [pedidos, setPedidos] = useState([])

    // console.log(pedidos)

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
                <Image source={require('../../../assets/capacete.png')} style={styles.capacete} />
                <ScrollView style={styles.lista}>
                    <FlatList
                        style={styles.eachItem}
                        data={pedidos}
                        renderItem={({ item }) => (
                            <View style={styles.itemLista}>
                                <Text style={[styles.tituloPedido, styles.mb20]}>Pedido <Text style={styles.vermelho}>#{item.idPedido}</Text></Text>
                                <Text>Data da solicitação:</Text>
                                <Text style={[styles.vermelho, styles.mb20]}>{(item.dataPedido).slice(0, 10)} - {(item.dataPedido).slice(11, 19)}</Text>
                                <Text>Itens:</Text>
                                <Text style={styles.mb20}>{item.itens}</Text>
                                <Text>Valor do pedido: <Text style={styles.vermelho}>R${item.valorPedido.toFixed(2)}</Text></Text>
                                <Text>Valor da Entrega: <Text style={styles.vermelho}>R${item.valorEntrega.toFixed(2)}</Text></Text>
                                <Text style={styles.mb20}>Valor total: <Text style={styles.vermelho}>R${(Number(item.valorPedido) + Number(item.valorEntrega)).toFixed(2)}</Text></Text>
                                <Text style={styles.mb20}>Forma de pagamento: </Text>
                                <Text>Endereço de entrega:</Text>
                                <Text style={styles.vermelho}>{item.endereco}</Text>
                                <TouchableOpacity style={styles.btnEntregue}><Text>Entregue</Text></TouchableOpacity>
                            </View>
                        )}
                    />
                </ScrollView>
            </View>
        </View>
    )
}