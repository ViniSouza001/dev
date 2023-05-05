import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ead from '../mock/ead.js'

export default function CursoEad({navigation}) {

        const Detalhar = (dados) => {
            navigation.navigate('Detalhes', {dados});
        }

    return (
        <View>
            <FlatList 
                data={Ead}
                style={styles.list}
                renderItem={({item}) => 
                    <TouchableOpacity style={styles.item} onPress={() => {Detalhar(item)}}>
                        <Text style={styles.text}>{item.nome}</Text>
                        <Text style={styles.bolder}>{item.modalidade}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 15,
        padding: 15,
        borderRadius: 1000,
        backgroundColor: '#dbdbdb'
    },
    list: {
        padding: '20px'
    },
    text: {
        fontSize: 17 
     },
     bolder: {
         fontSize: 17,
         fontWeight: 'bold'
     }
})