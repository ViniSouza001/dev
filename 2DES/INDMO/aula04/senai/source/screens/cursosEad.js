import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ead from '../mock/ead.js'

export default function cursoEad() {
    return (
        <View>
            <FlatList 
                data={Ead}
                style={styles.list}
                renderItem={({item}) => 
                <TouchableOpacity style={styles.item} >
                    <Text>{item.nome}</Text>
                    <Text>{item.modalidade}</Text>
                </TouchableOpacity>
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    item: {
        display: 'flex',
    },
    list: {

    }
})