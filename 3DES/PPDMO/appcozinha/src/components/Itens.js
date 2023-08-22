import React from 'react';
import { Text } from 'react-native';
import styles from '../screens/pedidos/styles';

function Itens ({ pedido }) { // recebe um único pedido como prop
   return (
      <>
         {/* mapear diretamente os itens do pedido */}
         {pedido.itens.map((item, index) => (
            <Text style={styles.vermelho} key={index}>{item.quantidade}x {item.nome}</Text>
         ))}
      </>
   );
}

export default Itens;