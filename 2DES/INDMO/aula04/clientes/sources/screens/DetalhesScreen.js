import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native-web'

export default function DetalhesScreen({navigation, route}) {
    const cliente = route.params.dados
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={cliente.avatar}></Image>
            <View style={styles.textos}>
                <Text style={styles.text}>CPF: {cliente.cpf}</Text>
                <Text style={styles.text}>Nome: {cliente.nome}</Text>
                <Text style={styles.text}>Email: {cliente.email}</Text>
                <Text style={styles.text}>Telefone: {cliente.telefone}</Text>
                <Text style={styles.text}>CEP: {cliente.cep}</Text>
                <Text style={styles.text}>Numero: {cliente.numero}</Text>
                <Text style={styles.text}>Complemento: {cliente.complemento}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    img: {
        width: '100%',
        height: '100%',
        maxHeight: 300
    },
    text: {
        fontSize: 16,
        margin: 5
    }
});