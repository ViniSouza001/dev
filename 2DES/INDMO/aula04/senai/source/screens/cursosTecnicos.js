import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Tecnico from '../mock/tecnico';

export default function CursosTecnicos({navigation}) {

    const Detalhar = (dados) => {
        navigation.navigate('Detalhes', {dados});
    }

    return(
        <View>
            <FlatList
                data={Tecnico}
                style={styles.lista}
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
    text: {
        fontSize: 17,
    },
    bolder: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        margin: 10,
        padding: 15,
        borderRadius: 1000,
        backgroundColor: '#dbdbdb'
    }
})