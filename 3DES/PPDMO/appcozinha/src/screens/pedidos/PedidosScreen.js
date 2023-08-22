import React from "react";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground, ScrollView, FlatList } from 'react-native'
import styles from "./styles";
import Itens from "../../components/Itens";

function PedidosScreen ({ navigation }) {

    const [pedidos, setPedidos] = useState([])
    const [loading, setLoading] = useState(true)
    const uri = 'http://localhost:8081'

    const fetchPedidos = () => {
        fetch(uri + '/listarPedidos', { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                const pedidosSemCozinha = data.filter(pedido => !pedido.dataCozinha)
                setPedidos(pedidosSemCozinha);
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchPedidos()
    }, []);

    const concluirPedido = (idPedido) => {

        const corpo = {
            dataCozinha: new Date(),
            idPedido: idPedido
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(corpo)
        }

        fetch(uri + '/pedidoPronto', options)
            .then(resp => { resp.status })
            .then(data => { navigation.navigate('HomeScreen') })
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

    function refresh () {
        setLoading(true)
        fetchPedidos()
    }

    console.log(pedidos);
    return (
        <ImageBackground
            source={require('../../../assets/Fundo.png')}
            style={styles.background}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image source={require('../../../assets/Chapeu.png')}
                        style={styles.chapeu} />
                    <ScrollView style={styles.lista}>
                        {pedidos.length === 0 ? (
                            <Text style={[styles.branco, styles.mb20]}>Não há pedidos no momento</Text>
                        ) : (
                            <FlatList
                                data={pedidos}
                                keyExtractor={(item) => item.idPedido.toString()}
                                renderItem={({ item }) => (
                                    !item.dataCozinha ? (
                                        <View style={styles.itemLista}>
                                            <Text style={[styles.tituloPedido, styles.mb20]}>Pedido <Text style={styles.vermelho}>#{item.idPedido}</Text></Text>
                                            <Text>Data da solicitação:</Text>
                                            <Text style={styles.vermelho}>{(item.dataPedido).slice(0, 10)}</Text>
                                            <Text>Hora</Text>
                                            <Text style={[styles.vermelho, styles.mb20]}>{(item.dataPedido).slice(11, 19)}</Text>
                                            <Text>Itens:</Text>
                                            <Itens pedido={item} />
                                            <Text style={styles.mt20}>Para entrega: {item.paraEntrega ? "Sim" : "Não"}</Text>
                                            <TouchableOpacity
                                                style={[styles.btnEntregue, styles.mt20]}
                                                onPress={() => { concluirPedido(item._id) }}
                                            >
                                                <Text>Concluído</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ) : (
                                        null
                                    )
                                )}
                            />
                        )
                        }
                        <TouchableOpacity
                            style={styles.btnEntregue}
                            onPress={() => { refresh() }}
                        >
                            <Text>Atualizar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    )
}

export default PedidosScreen