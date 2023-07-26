import {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';

export default function App() {

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
    <View style={styles.container}>
      <Text style={styles.title}>Viabilidade Econômica</Text>
      <View>
        <Text style={styles.text}>Valor Necessário</Text>
        <TextInput style={styles.input} onChangeText={(val) => {setValor(Number(val))}} />
      </View>
      <View>
        <Text style={styles.text}>Taxa Juros (p/ mês)</Text>
        <TextInput style={styles.input} onChangeText={(val) => {setJuros(Number(val))}} />
      </View>
      <View>
        <Text style={styles.text}>Número de parcelas</Text>
        <TextInput style={styles.input} onChangeText={(val) => {setnParcelas(Number(val))}} />  
      </View>
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Montante: R${montante}</Text>
      <Text style={styles.text}>Valor da parcela: R${valParcela}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#de5b5b',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  },
  button: {
    backgroundColor: '#e62222',
    padding: '10px',
    borderRadius: '10px',
  },
  input: {
    backgroundColor: '#fff',
    padding :'10px',
    borderRadius: '10px'
  },
  title: {
    fontSize: '25px'
  },
  text: {
    color: '#fff',
    fontSize: '20px',
  }
});
