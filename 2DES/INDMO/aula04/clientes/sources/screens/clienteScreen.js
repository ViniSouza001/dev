import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native';
import clientes from '../mocks/clientesMocks';

export default function ClientesScreen ({navigation}) {
    return (
        <View styles={styles.container}>
            <Text styles={styles.text}>Lista de Clientes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        width: '100%',
        paddingHorizontal: 20
    },
    text: {
        fontSize: 20
    }
})