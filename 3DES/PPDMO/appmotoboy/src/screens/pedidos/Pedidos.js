import React from "react";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from "react-native"
import styles from "./style";
import Itens from '../../components/Itens'

export default function PedidosScreen({ navigation }) {

    const [pedidos, setPedidos] = useState([])
    const [loading, setLoading] = useState(true)

    const uri = 'http://localhost:8081'
    useEffect(() => {
        fetch(uri + '/listarEntregas', { method: 'GET' })
            .then(response => response.json())
            .then(data => { // chega todos os pedidos em um vetor
                setPedidos(data);
                console.log(data);
                setLoading(false)
                // console.log(pedidos) // [{item, idCliente, idPedido}, {item, idCliente, idPedido}]
            })

    }, []); // O array vazio indica que o efeito deve ser executado apenas uma vez, na montagem do componente

    // useEffect(() => {
    //     // Verifica se há pedidos sem dataEntrega
    //     const hasPedidosExistentes = pedidos.some(pedido => !pedido.dataEntrega);
    //     setPedidosExistentes(hasPedidosExistentes);
    // }, [pedidos]);

    const concluirPedido = (idPedido) => {

        const corpo = {
            dataEntrega: new Date(),
            idPedido: idPedido
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(corpo)
        }

        fetch(uri + '/entregaPronta', options)
            .then(resp => { resp.status })
            .then(data => { navigation.navigate('LoginScreen') })
            .catch(error => { console.log('Erro interno no servidor: ' + error) })
    }

    if (loading) {
        return (
            <View>
                <Image source={require('../../../assets/Fundo.png')} style={styles.fundo} />
                <Text style={styles.vermelho}>Carregando...</Text>
            </View>
        )
    }

    // {
    //     pedidos && pedidos.forEach(pedido => {
    //         if (!pedido.dataEntrega && pedido.dataCozinha) setPedidosExistentes(true)
    //     })
    // }

    return (
        <View>
            <Image source={require('../../../assets/Fundo.png')} style={styles.fundo} />
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image source={require('../../../assets/capacete.png')} style={styles.capacete} />
                    {pedidos.length == 0 ? (
                        <Text style={styles.branco}>Não há pedidos para serem mostrados no momento</Text>
                    ) : (
                        <ScrollView style={styles.lista}>
                            <FlatList
                                data={pedidos}
                                keyExtractor={(item) => item.idPedido.toString()}
                                renderItem={({ item }) => {
                                    if (!item.dataEntrega) {
                                        return (
                                            <View style={styles.itemLista}>
                                                <Text style={[styles.tituloPedido, styles.mb20]}>Pedido <Text style={styles.vermelho}>#{item.idPedido}</Text></Text>
                                                <Text>Data da solicitação:</Text>
                                                <Text style={styles.vermelho}>{(item.dataPedido).slice(0, 10)}</Text>
                                                <Text>Hora</Text>
                                                <Text style={[styles.vermelho, styles.mb20]}>{(item.dataPedido).slice(11, 19)}</Text>
                                                <Text>Itens:</Text>
                                                <Itens pedido={item} />
                                                <Text style={styles.mt20}>Valor do pedido: <Text style={styles.vermelho}>R${item.valorPedido.toFixed(2)}</Text></Text>
                                                <Text>Valor da Entrega: <Text style={styles.vermelho}>R${item.valorEntrega.toFixed(2)}</Text></Text>
                                                <Text style={styles.mb20}>Valor total:
                                                    <Text style={styles.vermelho}> R${(Number(item.valorPedido) + Number(item.valorEntrega)).toFixed(2)}</Text>
                                                </Text>
                                                <Text>Endereço de entrega:</Text>
                                                <Text style={styles.vermelho}>{item.endereco}</Text>
                                                <Text style={[styles.vermelho, styles.mb20]}>{item.cep}</Text>
                                                <TouchableOpacity
                                                    style={styles.btnEntregue}
                                                    onPress={() => { concluirPedido(item._id) }}
                                                >
                                                    <Text>Entregue</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }
                                }}
                            />
                        </ScrollView>
                    )
                    }
                </View>
            </View>
        </View>
    )
}