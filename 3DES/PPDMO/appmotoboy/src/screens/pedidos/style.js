import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fundo: {
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
    itemLista: {
        color: '#fff'
    },
    container: {
        position: "absolute",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        width: '100vw',
        height: '96vh',
        marginTop: '20px',
        overflow: 'hidden'
    },
    contentContainer: {
        flex: 1,
        gap: '2rem',
        width: '100%',
        alignItems: "center",
        overflow: "hidden",
    },
    lista: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        flexDirection: 'column',
        padding: 20,
        height: '50vh',
        width: '95%',
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
        color: 'rgb(169,4,4)'
    },
    branco: {
        color: '#fff',
        fontSize: 15,
        alignSelf: 'center'
    },
    mb20: {
        marginBottom: '20px'
    },
    mt20: {
        marginTop: '20px'
    },
    btnEntregue: {
        backgroundColor: '#A90404',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 35,
        paddingRight: 35,
        alignItems: 'center'
    },
    tituloPedido: {
        fontSize: 20
    }
})

export default styles