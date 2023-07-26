import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from 'react';
import users from '../mock/users';


const ListUsers = ({ navigation }) => {

    const informacoesUsuario = (item) => {
        console.log(navigation)
        navigation.navigate('Informacoes', { item })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => informacoesUsuario(item) }>
                <Image style={styles.img} source={item.foto} />
                <View>
                    <Text style={styles.id}>ID: {item.id}</Text>
                    <Text style={styles.text}>Nome: {item.nome}</Text>
                </View>
            </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderItem}
                style={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    text: {
        fontFamily: "Arial",
        fontSize: 15,
        color: '#000',
        marginTop: 20,
        fontWeight: 'bold'
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        gap: '1rem',
    },
    id: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    },
    img: {
        width: 100,
        height: 100
    }
})

export default ListUsers;