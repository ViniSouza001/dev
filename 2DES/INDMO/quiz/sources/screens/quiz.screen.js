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
            <Text>Testando...</Text>
            <TouchableOpacity onPress={() => {mudarPergunta()}}>
                <Text style={styles.txt}>Apenas um show</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100vw',
        height: '100vh',
    }
})