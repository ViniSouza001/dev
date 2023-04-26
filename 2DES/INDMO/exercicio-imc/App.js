import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IMC</Text>
      <View style={styles.fields} >
        <Text style={styles.paragraph}>Peso:</Text>
        <TextInput style={styles.inputs}></TextInput>
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
  },
  titulo: {
    fontFamily: "Arial",
    fontSize: '30px',
    fontWeight: 'bold'
  },
  fields: {
    
  },
  paragraph: {
    color: '#fff'
  },
  inputs: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px'
  }
});
