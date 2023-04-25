import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [comprimento, setComprimento] = useState(0);
  const [corrente, setCorrente] = useState(0);
  const [resultado220, setResultado220] = useState(0);
  const [resultado127, setResultado127] = useState(0);

  const calcular = () => {
    if(isNaN(comprimento) || isNaN(corrente)) {
      alert('Por favor, digite um número');
    } else {
      let operacao1 = (1.73 * (comprimento * corrente)) / 510.4;
      setResultado220(operacao1);
      let operacao2 = (2 * (comprimento * corrente)) / 294.64;
      setResultado127(operacao2);
    }
  }

  return (

    <View style={styles.container}>
      <View style={styles.div} >
        <Text style={styles.texto} >Digite o comprimento do fio (M)</Text>
      <TextInput style={styles.input} onChangeText={ (val) => {setComprimento(Number(val))} } />
      </View>

      <View style={styles.div} >
        <Text style={styles.texto} >Digite a corrente em ampere</Text>
        <TextInput style={styles.input} onChangeText = {(val) => { setCorrente(Number(val)) }} />
      </View>

      <TouchableOpacity onPress={() => calcular()} style={styles.button} >
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.texto} id='resultado1'>220V: {Math.floor(resultado220)}mm</Text>
      <Text style={styles.texto} id='resultado1'>127V: {Math.floor(resultado127)}mm</Text>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#500088",
    gap: "2rem"
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "10px",
  },
  texto: {
    color: "#fff",
    fontSize: "20px",
  },
  div: {
    flexDirection: "row",
    gap: "1rem",
    alignItems: "center",
  },
  button: {
    margin: "10px",
    backgroundColor: "#fff",
    padding: "10px"
  }
});
