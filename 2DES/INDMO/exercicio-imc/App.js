import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  // setPeso é o que atualiza, peso é o que guarda
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  const [diagnostico, setDiagnostico] = useState('');
  const calcular = () => {
    if(isNaN(peso) || isNaN(altura)) {
      alert('Coloque apenas números!!');
    } else {
      let conta = (peso / (altura ** 2));
      setImc(conta)
      if(conta < 18.5) setDiagnostico('Magreza');
      else if(conta < 24.9) setDiagnostico('Normal');
      else if(conta < 29.9) setDiagnostico('Sobrepeso');
      else if (conta < 39.9) setDiagnostico('Obesidade');
      else setDiagnostico('Obesidade grave');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IMC</Text>
      <View style={styles.fields} >
        <Text style={styles.paragraph}>Peso:</Text>
        <TextInput style={styles.inputs} onChangeText={(val) => {setPeso(Number(val))}}></TextInput>
      </View>
      <View style={styles.fields} >
        <Text style={styles.paragraph}>Altura:</Text>
        <TextInput style={styles.inputs} onChangeText={(val) => {setAltura(Number(val))}}></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <View style={styles.fields}>
        <Text style={styles.paragraph}>IMC: {(imc).toFixed(2)}</Text>
        <Text style={styles.paragraph}>Diagnostico: {diagnostico}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#227558',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem'
  },
  titulo: {
    fontFamily: "Arial",
    fontSize: '30px',
    fontWeight: 'bold'
  },
  fields: {
    display: 'flex',
    flexDirection:'column',
    gap: '10px'
  },
  paragraph: {
    color: '#fff',
    fontSize: '20px'
  },
  inputs: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px'
  },
  button: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px'
  }
});
