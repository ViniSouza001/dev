import React from 'react'
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native'
import { useState,useEffect } from 'react'
import perguntas from '../mock/questions.json'

export default function Quiz() {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log(contador)
    }, [contador])

    function mudarPergunta() {
        setContador(contador + 1)
    }

    return (
        <View>
            <Image source={require('../../assets/ceu.jfif')} style={styles.img} />
            <View style={styles.div}>
                    <Text style={styles.title}>Pergunta {contador + 1}</Text>
                    <Text style={styles.questions}>{perguntas[contador].text}</Text>
                <TouchableOpacity onPress={() => {mudarPergunta()}}>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100vw',
        height: '100vh',
    },
    div: {
        width: '80vw',
        height: '100vh',
        position: 'absolute',
        flexDirection: 'column',
        alignSelf: 'center',
        textAlign:'center',
        justifyContent: 'space-evenly'
    },
    questions: {
        color: "#fff",
        fontSize: 20
    },
    title: {
        color: '#fff',
        fontSize: 25
    }
})