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

// mesmo que array = [1,2,3] até 10...
const array = Array.from({ length: 10 }, (_, i) => i + 1);

// função que gera valor aleatorio entre 0 e 100
const gerarPrecoAleatorio = () => {
    return Math.floor(Math.random() * 100);
}

export default function Destaques() {
    const produtoAleatorio = () => {
        const array = [
            'https://m.media-amazon.com/images/I/612L4H-VcVL._AC_SY450_.jpg',
            'https://static8.depositphotos.com/1338574/829/i/600/depositphotos_8299228-stock-photo-laptop-with-blue-graphics.jpg',
            'https://img.freepik.com/vetores-gratis/tela-realista-para-smartphone-com-aplicativos-diferentes_52683-30241.jpg?w=2000',
            'https://s2.glbimg.com/ve5U7vTPeIyhOGOmYrKUDYASyQo=/247x0:1673x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/9/6/fue7uZSlekdvTcka4Rjg/3.png',
            'https://electrolux.vtexassets.com/arquivos/ids/219946/Refrigerator_IB54B_Dimensions_Electrolux_Portuguese-medidas.jpg?v=637884937490330000',
            'https://polishop.vtexassets.com/arquivos/ids/777268/16650847535463.jpg?v=638014662126870000',
            'https://m.media-amazon.com/images/I/61eDcySpaYL._AC_SY450_.jpg',
            'https://images5.kabum.com.br/produtos/fotos/195585/teclado-mecanico-gamer-motospeed-ck61-rgb-switch-vermelho-vermelho-branco-fmstc0116bro_1629117654_g.jpg',
            'https://m.media-amazon.com/images/I/61gRw-ooKrL._AC_SY450_.jpg',
            'https://ae01.alicdn.com/kf/S326da117c067485f900789e6381f5ae8A/Redragon-teclado-mouse-set-K552-RGB-BA-jogo-mec-nico-teclado-e-mouse-combo-com-fio.jpg_Q90.jpg_.webp'
        ];
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} >
                Destaques
            </Text>
            <ScrollView>
                <FlatList
                    data={array}
                    keyExtractor={item => item.toString()}
                    style={styles.FlatList}
                    renderItem={({ item }) => {
                        const preco = gerarPrecoAleatorio()
                        return (
                            <TouchableOpacity style={styles.produto} >
                                <Image
                                    source={"https://static8.depositphotos.com/1338574/829/i/600/depositphotos_8299228-stock-photo-laptop-with-blue-graphics.jpg"}
                                    style={styles.imageProduto}
                                />
                                <Text style={styles.textProduto} >Produto</Text>
                                <Text style={styles.textProduto} >R${preco}.00</Text>
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
        flexDirection: 'row',
        paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
      },
    title: {
        color: '#121214',
        fontSize: 20,
        fontWeight: 'bold',
    },
    flatList: {
        flex: 1,
        width: '100%',
        paddingBottom: 100,
    },
    produto: {
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',
        flex: 1,
        width: '97%',
        gap: 10,
        minHeight: 100,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    textProduto: {
        color: '#000',
        fontSize: 20,
    },
    imageProduto: {
        width:80,
        height:80,
    }

})