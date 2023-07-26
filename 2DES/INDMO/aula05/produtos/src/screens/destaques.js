import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
import Produtos from '../mocks/produtos.js'

// mesmo que array = [1,2,3] até 10...
const array = Array.from({ length: 10 }, (_, i) => i + 1);

// função que gera valor aleatorio entre 0 e 100
const gerarPrecoAleatorio = () => {
    return Math.floor(Math.random() * 100);
}

const precos = []
const enviarPrecoAoCarrinho = (preco)=> {
    precos.push(preco);
    window.localStorage.setItem('precos', precos);
}

export default function Destaques() {
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} >
                Destaques
            </Text>
            <ScrollView>
                <FlatList
                    data={Produtos}
                    keyExtractor={item => item.toString()}
                    style={styles.flatList}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                            onPressIn={() => enviarPrecoAoCarrinho(20)}
                            style={styles.produto} >
                                <Image
                                    source={item.imagem}
                                    style={styles.imageProduto}
                                />
                                <Text style={styles.textProduto} >{item.nome}</Text>
                                <Text style={styles.textProduto} >R${item.preco}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        flexDirection: 'column',
        paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
        marginBottom: 80,
      },
    title: {
        color: '#121214',
        fontSize: 20,
        fontWeight: 'bold',
    },
    flatList: {
        width: '50%'
    },
    produto: {
        marginTop: 20,
        width: '97%',
        gap: 10,
        minHeight: 100,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
    },
    textProduto: {
        color: '#000',
        fontSize: 20,
    },
    imageProduto: {
        width:120,
        height:80,
    }
})