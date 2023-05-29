import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from 'react';
import users from '../mock/users';

const ListUsers = ({ navigation }) => {
    const handleUsuarioPress = ({ item }) => {
        navigation.navigate('Informações', { item })
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => { handleUsuarioPress(item) }}>
                <Image style={styles.img} source={item.foto} />
                <View>
                <Text style={styles.titulo}>{item.id}</Text>
                <Text style={styles.text}>{item.nome}</Text>
                </View>
            </TouchableOpacity>

    )

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Usuários</Text>
            </View>
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
        fontSize: 25,
        color: '#000'
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row'
    },
    titulo: {
        color: '#000',
        fontSize: 30
    },
    img: {
        width: 100,
        height: 100
    }
})

export default ListUsers;