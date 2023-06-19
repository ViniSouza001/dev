import React from 'react'
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native'

export default function Resultados({route, navigation}) {

    const acertos = route.params.acertos
    const erros = route.params.erros
    const quantidade = route.params.quantidade

    const validacao = () => {
        if(acertos >= erros) {
            return 'Aprovado! :)'
        } else {
            return 'Reprovado! :('
        }
    }

    const handleInicial = () => {
        navigation.navigate('Pagina Inicial')
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/ceu.jpeg')} style={styles.img} />
            <View style={styles.content}>
                <Text style={styles.titulo}>Resultados</Text>
                <View style={styles.resultados}>
                    <View style={styles.resultado}>
                        <Text style={styles.text}>Questões</Text>
                        <Text style={styles.number}>{quantidade}</Text>
                    </View>
                    <View style={styles.resultado}>
                        <Text style={styles.text}>Acertos</Text>
                        <Text style={styles.number}>{acertos}</Text>
                    </View>
                    <View style={styles.resultado}>
                        <Text style={styles.text}>Erros</Text>
                        <Text style={styles.number}>{erros}</Text>
                    </View>
                </View>
                <Text style={styles.titulo}>{validacao()}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}onPress={() => {handleInicial()}}>Reiniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    },
    img: {
        width: '100vw',
        height: '100vh',
        zIndex: -1
    },
    content: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100vw',
        height: '100vh',
    },
    titulo: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Arial',
        alignSelf: 'center'
    },
    resultados: {
        flexDirection: 'column',
        gap: 16
    },
    resultado: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90vw',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'rgba(145,145,145, .5)',
        borderRadius: 100,
    },
    text: {
        fontSize: 23,  
        color: 'white'
    },
    number: {
        color: '#ff0000',
        fontSize: 23,
        
    },
    button: {
        alignSelf: 'center',
        backgroundColor: 'rgba(201,201,201, .5)',
        padding: 20,
        borderRadius: 100,
        width: 150,
        alignItems: 'center'
    }
})