import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Industrial from '../mock/industrial.js';

export default function CursoIndustrial({navigation}) {

    const Detalhar = (dados) => {
        navigation.navigate('Detalhes', {dados});
    }

    return(
        <View>
            <FlatList
            data={Industrial}
            style={styles.list}
            renderItem={({item}) => 
            <TouchableOpacity style={styles.area} onPress={() => {Detalhar(item)}}>
                <Text style={styles.text}>{item.nome}</Text>
                <Text style={styles.bolder}>{item.modalidade}</Text>
            </TouchableOpacity>
        } 
        />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 10
    },
    area: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        padding: 15,
        borderRadius: 1000,
        backgroundColor: '#dbdbdb'
    },
    text: {
       fontSize: 17 
    },
    bolder: {
        fontSize: 17 ,
        fontWeight: 'bold'
    }
})