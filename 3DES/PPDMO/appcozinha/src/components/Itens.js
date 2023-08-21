import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

function Itens ({ pedido }) {
    return (
        <>
            {pedido.itens.map((item, index) => (
                <Text key={index}>{item.quantidade}x {item.nome}</Text>
            ))}
        </>
    );
}

export default Itens;
