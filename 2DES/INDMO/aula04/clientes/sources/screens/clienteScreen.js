import React from 'react'
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Clientes from '../mocks/clientesMocks';

export default function ClientesScreen ({navigation}) {

    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', {dados});
        console.log(dados)
    }

    return (
        <View styles={styles.container}>
            <FlatList
            data={Clientes}
            style={styles.list}
            renderItem={({item}) => 
            <TouchableOpacity 
            style={styles.container}
            onPress={()=> {abrirDetalhes(item)}}
            >
                <Image style={styles.img} source={item.avatar} />
                <Text>CPF: {item.cpf}</Text>
                <Text>Nome: {item.nome} {item.sobrenome}</Text>
                <Text>Telefone: {item.telefone}</Text>
            </TouchableOpacity>} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: '1px',
        margin: '10px'
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
        display: 'flex',
    },
    item: {
        margin: 10
    },
    img: {
        width: 100,
        height: 150,
        margin: 5
    },
    text: {
        margin: '10px'
    }
})