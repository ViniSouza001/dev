import React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
export default function DetalhesScreen({navigation, route}) {
    const curso = route.params.dados;
    let valor = 0;
    if(curso.valor == null) {
        valor = "Gratuito"
    }

    const link = () => {
        const url = curso.link
        Linking.openURL(url)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{curso.nome}</Text>
            <Text style={styles.text}>Area: {curso.area}</Text>
            <Text style={styles.text}>Telefone: {curso.telefone}</Text>
            <Text style={styles.text}>Email: {curso.email}</Text>
            <Text style={styles.text}>Unidade: {curso.unidade}</Text>
            <Text style={styles.text}>Carga: {curso.carga}</Text>
            <Text style={styles.text}>Valor: {valor}</Text>
            <Text style={styles.text}>Mais informações: <Text style={styles.link} onPress={() => {link()}}>{curso.link}</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },  
    text: {
        fontSize: 17,
        fontFamily: 'Arial',
        marginTop: 20
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline'
    }
})