import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import ButtonCadastrar from './src/components/button-cadastrar/index';

export default function App() {
  const [numero, setNumero] = new useState(0);
  const [nome, setNome] = new useState("");

  const [val1, setVal1] = new useState(0);
  const [val2, setVal2] = new useState(0);
  const [resultado, setResultado] = new useState(0);

  const tituloBotao = "Cadastrar";
  const texto = "Meu número é: "

  const incrementar = () => {
    let valor = numero + 1;
    setNumero(valor);
  }

  function cadastrar() {
    console.log(nome, numero);
    setNome('');
  }

  const somar = () => {
    setResultado(val1 + val2);
    setVal1(0);
    setVal2(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{texto + numero}</Text>
      <TextInput style={styles.input} onChangeText={ (val) => {setNome(val)} } value={nome} />
      <Button title={tituloBotao} onPress={() => { cadastrar() }} />
      <TouchableOpacity style={styles.button} onPress={ () => {incrementar()} }>
        <Text style={styles.textButton}>Autenticar</Text>
      </TouchableOpacity>
      <ButtonCadastrar />

      <TextInput style={styles.input} value={val1} onChangeText={ (val) => {setVal1(Number(val)) } }/>
      <TextInput style={styles.input} value={val2} onChangeText={ (val) => {setVal2(Number(val)) } } />
      <Button title="Somar" onPress={() =>  somar()} />
      <Text style={styles.title} >O resultado da soma é: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2630f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  input: {
    borderBottomWidth: '1px',
    borderBottomColor: '#333',
    borderRadius: "10px",
    padding: '5px',
    margin: "15px",
    color: "#fff",
    outline: "none",
    borderBottomColor: 'rgb(0, 0, 0)'
  },
  button: {
    padding: '15px',
    backgroundColor: "#DF5800",
    borderRadius: '7px'
  },
  textButton: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: '1.25rem'
  }
});