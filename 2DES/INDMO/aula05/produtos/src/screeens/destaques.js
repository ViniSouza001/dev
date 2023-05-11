import {View, Text, StyleSheet} from 'react-native';


export default function Destaques() {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                DESTAQUES
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#121214',
        fontSize: 20,
        fontWeight: 'bold'
    }
})