import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fundo: {
        width: '100vw',
        height: '100vh',
    },
    itemLista: {
        color: '#fff'
    },
    container: {
        position: "absolute",
        flexDirection: "column",
        alignItems: "center",
        width: '100vw',
        height: '80vh',
        justifyContent: 'space-evenly',
        overflow: 'hidden'
    },
    lista: {
        backgroundColor: 'rgba(0,0,0,.45)',
        flexDirection: 'column',
        padding: 20,
        gap: '5rem',
        width: '90%',
        overflow: 'scroll'
    },
    capacete: {
        width: 80,
        height: 80
    },
    itemLista: {
        width: '100%',
        backgroundColor: "rgba(195, 191, 191, 0.8)",
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '2rem',
        margin: 'auto',
        padding: 20,
    },
    vermelho: {
        color: '#FF0000'
    },
    eachItem: {
        // marginTop: 20,
    },
    mb20: {
        marginBottom: '20px'
    },
    btnEntregue: {
        backgroundColor: '#FF0000',
        padding: 15,
    },
    tituloPedido: {
        fontSize: 20
    }
})

export default styles