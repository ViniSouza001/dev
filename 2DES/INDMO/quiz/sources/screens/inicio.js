import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
export default function Inicio() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/ceu.jfif')} style={styles.background} />
            <Image source={require('../../assets/lua.png')} style={styles.lua} />
            <TouchableOpacity style={styles}>
                <Text style={styles.txt}>Iniciar</Text>
            </TouchableOpacity>
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
        position: 'absolute',
        opacity: 0.85,
        alignSelf: 'center'
    }
})