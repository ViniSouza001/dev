import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App({ navigation }) {

    const paginaEAD = ()=> {
        navigation.navigate('Cursos EAD');
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Senai</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('../../assets/img/ead.png')}></Image>
        <Text style={styles.txt} onPress={() => {paginaEAD()}}>Formação inicial e continuada</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('../../assets/img/curso-tecnico.png')}></Image>
        <Text style={styles.txt}>Cursos técnicos</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('../../assets/img/aprendizagem-industrial.png')}></Image>
        <Text style={styles.txt}>Aprendizagem industrial</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    gap: 10
  },
  header: {
    width: '100vw',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000'
  },
  logo: {
    padding: '5px',
    width : '120px',
    color: '#FFF',
    fontFamily: 'Arial',
    fontSize: '20pt',
    textAlign: 'center',
    borderTopColor: '#000',
    borderBottomColor: '#000',
    borderBottomWidth: 3,
    borderTopWidth: 3,
    fontWeight: 'bold',
  },
  img: {
    width: 310,
    height: 200
  },
  card: {
    backgroundColor: '#d1d1d1',
    padding: '15px',
    alignItems: 'center',
    gap: 25,
    borderRadius: 10
  },
  txt: {
    fontSize: 20,
    fontFamily: 'Arial',
    textDecorationLine: 'underline'
  }
});