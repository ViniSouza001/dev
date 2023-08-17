import React from "react";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"

export default function PedidosScreen() {

    const uri = 'http://localhost:8081'
    useEffect(() => {
        fetch(uri + '/listarPedidos', { method: 'GET' })
            .then(response => response.json())
            .then(data => { console.log(data) }
            )
    })


    return (
        <View>
            <Text>Testando</Text>
        </View>
    )
}