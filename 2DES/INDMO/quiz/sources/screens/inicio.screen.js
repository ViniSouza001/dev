import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";


export default function Inicio({ navigation }) {

    const handlePerguntas = () => {
        navigation.navigate('Quiz', {name: 'quiz'})
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/ceu.jpeg')} style={styles.background} />
            <View style={styles.div} >
                <Image source={require('../../assets/lua.png')} style={styles.lua} />
                <TouchableOpacity style={styles.button} onPress={() => {handlePerguntas()}}>
                    <Text style={styles.txt}>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100vw',
        height: '100vh',
        zIndex: -1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'space-between'
    },
    lua: {
        width: '200px',
        height: '200px',
        zIndex: 1,
        alignSelf: 'center'
    },
    button: {
        width: 200,
        backgroundColor: 'gray',
        alignSelf: 'center',
        textAlign: 'center',
        padding: 20,
        borderRadius: 1000,
        opacity: .8
    },
    div: {
        position:'absolute',
        alignSelf: 'center',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    txt: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    }
})