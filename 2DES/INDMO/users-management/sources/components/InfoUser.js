import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const InfoUser = ({route}) => {
    const { item } = route.params;
    const [ID, setID] = useState(0);
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ nascimento, setNascimento ] = useState('');

    const alterarInformacoes = () => {
        console.log('clicado!!!');
    }

    return (
        <View style={styles.container}>
            <Image source={item.foto} style={styles.img}/>
            <View style={styles.info}>
                <Text style={styles.txt}>Id: {item.id}</Text>
                <Text style={styles.txt}>Nome: {item.nome}</Text>
                <Text style={styles.txt}>Email: {item.email}</Text>
                <Text style={styles.txt}>Nascimento: {item.nascimento}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {alterarInformacoes()}}>
                <Text style={styles.txtButton}>Alterar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        textAlign: 'left',
    },
    img: {
        width: 300,
        height: 300,
        marginTop: 10,
        alignSelf: 'center'
    },
    info: {
        alignItems: 'flex-start',
        margin: 20,
        gap: '1rem'
    },
    txt: {
        fontSize: 17
    },
    button: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 10,
        alignSelf: 'center',
        width: '80vw',
        alignItems: 'center'
    },
    txtButton: {
        color: '#fff',
        fontSize: 16
    }
})

export default InfoUser