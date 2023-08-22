import React from "react";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground, ScrollView, FlatList } from 'react-native'
import styles from "./styles";

function PedidosScreen({ navigation }) {

    const [pedidos, setPedidos] = useState([])
    const [loading, setLoading] = useState(true)

    const uri = 'http://localhost:8081'
    useEffect(() => {
        fetch(uri + '/listarPedidos', { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setPedidos(data);
                console.log(data)
                setLoading(false)
            })
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


    return (
        <ImageBackground
            source={require('../../../assets/Fundo.png')}
            style={styles.background}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image source={require('../../../assets/Chapeu.png')}
                        style={styles.chapeu} />
                    {
                        pedidos.length === 0 ? (
                            <Text style={styles.branco}>Não há pedidos para serem mostrados no momento</Text>
                        ) : (
                            <ScrollView style={styles.lista}>
                                <FlatList
                                    data={pedidos}
                                    keyExtractor={(item) => item.idPedido.toString()}
                                    renderItem={({ item }) => (
                                        <View style={styles.itemLista}>
                                            <Text style={[styles.tituloPedido, styles.mb20]}>Pedido <Text style={styles.vermelho}>#{item.idPedido}</Text></Text>
                                            <Text>Data da solicitação:</Text>
                                            <Text style={styles.vermelho}>{(item.dataPedido).slice(0, 10)}</Text>
                                            <Text>Hora</Text>
                                            <Text style={[styles.vermelho, styles.mb20]}>{(item.dataPedido).slice(11, 19)}</Text>
                                            <Text>Itens:</Text>
                                            {/* <Itens pedido={item} /> */}
                                            <TouchableOpacity
                                                style={styles.btnEntregue}
                                                onPress={() => { concluirPedido(item._id) }}
                                            >
                                                <Text>Entregue</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                />
                            </ScrollView>
                        )
                    }
                </View>
            </View>
        </ImageBackground>
    )
}

export default PedidosScreen