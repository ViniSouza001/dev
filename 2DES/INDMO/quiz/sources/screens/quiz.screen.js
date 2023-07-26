import React from 'react'
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native'
import { useState } from 'react'
import perguntas from '../mock/questions.json'

export default function Quiz({ navigation }) {
    const [contador, setContador] = useState(0)
    const [erros, setErros] = useState(0)
    const [acertos, setAcertos] = useState(0)

    const handleResults = () => {
        navigation.navigate("Resultados", { 'acertos': acertos, 'erros': erros, 'quantidade': contador })
    }

    function mudarPergunta() {
        setContador(contador + 1)
    }

    function verificacao(element) {
        let resposta = perguntas[contador].answer // 0
        console.log(resposta)
        if (element == perguntas[contador].options[resposta]) {
            console.log('resposta certa')
            setAcertos(acertos + 1)
        } else {
            console.log('resposta errada');
            setErros(erros + 1)
        }
        mudarPergunta()
    }

    function qtdPerguntas() {
        if(contador == 10) {
            handleResults()
        } else {
            return perguntas[contador].text
        }
    }

    function showQuestions() {
        if(contador == 10) {return handleResults()}
        else {
            const options = []
            for (let i = 0; i < perguntas[contador].options.length; i++) {
            options.push(
                <TouchableOpacity key={i} style={styles.options} onPress={() => { verificacao(perguntas[contador].options[i]) }}>
                    <Text style={styles.option}>{perguntas[contador].options[i]}</Text>
                </TouchableOpacity>
            )
        }
        return options
        }
        
    }

    return (
        <View>
            <Image source={require('../../assets/ceu.jpeg')} style={styles.img} />
            <View style={styles.div}>
                <Text style={styles.title}>Pergunta {contador + 1}</Text>
                <Text style={styles.questions}>{qtdPerguntas()}</Text>
                <View style={styles.options}>{showQuestions()}</View>
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
        textAlign: 'center',
        justifyContent: 'space-evenly'
    },
    questions: {
        color: "#fff",
        fontSize: 20
    },
    title: {
        color: '#fff',
        fontSize: 25
    },
    option: {
        backgroundColor: "#585858",
        opacity: 0.8,
        color: '#fff',
        borderRadius: 100,
        fontSize: 20,
        padding: 10
    },
    options: {
        flexDirection: 'column',
        gap: 16
    }
})