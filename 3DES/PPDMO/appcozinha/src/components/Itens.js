import react from "react";
import { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";
import styles from '../screens/pedidos/style'


function Itens({ pedidos }) {
    const uri = 'http://localhost:8081'
    const [itens, setItens] = useState({})

    useEffect(() => {
        formatarItens()
    }, [pedidos])

    function formatarItens() {
        var quantidade; var nome;
        pedidos.forEach(pedido => {
            console.log(pedido.itens[0].nome);
            setItens(pedido.itens)
            nome = pedido.itens[0].nome
            quantidade = pedido.itens[0].quantidade
            console.log(nome, quantidade)
        })
        return (<Text style={styles.mb20}>{quantidade}x {nome}</Text>)
    }

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

    console.log(itens);

    return (
        <ScrollView style={styles.lista}>
            {pedidos.length === 0 ? (
                <Text>Não há pedidos para serem entregues no momento</Text>
            ) : (
                <FlatList
                    data={pedidos}
                    renderItem={({ item }) => {

                        if (!item.dataEntrega) {
                            return (
                                <View style={styles.itemLista}>
                                    <Text style={[styles.tituloPedido, styles.mb20]}>Pedido <Text style={styles.vermelho}>#{item.idPedido}</Text></Text>
                                    <Text>Data da solicitação:</Text>
                                    <Text style={[styles.vermelho, styles.mb20]}>{(item.dataPedido).slice(0, 10)} - {(item.dataPedido).slice(11, 19)}</Text>
                                    <Text>Itens:</Text>
                                    {formatarItens()}
                                    <Text>Valor do pedido: <Text style={styles.vermelho}>R${item.valorPedido.toFixed(2)}</Text></Text>
                                    <Text>Valor da Entrega: <Text style={styles.vermelho}>R${item.valorEntrega.toFixed(2)}</Text></Text>
                                    <Text style={styles.mb20}>Valor total: <Text style={styles.vermelho}>R${(Number(item.valorPedido) + Number(item.valorEntrega)).toFixed(2)}</Text></Text>
                                    <Text style={styles.mb20}>Forma de pagamento: </Text>
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
            )}
        </ScrollView>
    )
}

export default Itens