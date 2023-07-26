import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

export default function FormEconomia() {
    const [valor, setValor] = useState(0)
    const [juros, setJuros] = useState(0);
    const [nParcelas, setnParcelas] = useState(0);
    const [montante, setMontante] = useState(0);
    const [valParcela, setValParcela] = useState(0);

    const calcular = () => {
        let contaMontante = (valor * ((1 + (juros / 100))** nParcelas)).toFixed(2);
        setMontante(contaMontante);
        let precoParcelaSimples = (contaMontante / nParcelas).toFixed(2);
        setValParcela(precoParcelaSimples);
      }

      return (
        <>
            <View style={styles.container}>
                <View style={styles.content} >
                    <Text>Calculadora de montante</Text>

                    <MaskInput 
                    mask={[/\d/, /\d/, /\d/, /\d/, '.',/\d/, /\d/]}
                    />
                </View>
            </View>
        </>
      )
}

const styles = StyleSheet.create({


})