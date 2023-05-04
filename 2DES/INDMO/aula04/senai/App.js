import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Senai</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('./assets/img/ead.png')}></Image>
        <Text style={styles.txt}>Formação inicial e continuada</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('./assets/img/curso-tecnico.png')}></Image>
        <Text style={styles.txt}>Formação inicial e continuada</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('./assets/img/aprendizagem-industrial.png')}></Image>
        <Text style={styles.txt}>Formação inicial e continuada</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#dbdbdb',
    padding: '10px',
    alignItems: 'center',
    gap: 25
  },
  txt: {
    fontSize: 25,
    fontFamily: 'Arial'
  }
});
