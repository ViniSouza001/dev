import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

// pegar dimensão da tela
const { width, height } = Dimensions.get('screen');

// usuario
const user = {
    username: 'user',
    pass: '123456'
}

export default function LoginForm({ navigation }) {
    // status
    const [ username, setUsername ] = React.useState('');
    const [pass, setPass] = React.useState('');

    // função
    const validaUsuario = () => {
        if(pass == user.pass && username == user.username) {
            navigation.navigate("TelaImc", {name: 'TelaImc'})
        }
    }

    // view
    return (
        <View style={styles.container}>
            <Text>Formulario de cadastro</Text>
            <View style={styles.form}>
                {/* Username */}
                <MaskInput
                style={styles.TextInput}
                onChangeText={(masked, unmasked) => setUsername(masked)}
                value={username}
                placeholder='Digite seu username'
                />
                {/* Senha */}
                <MaskInput
                mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                style={styles.TextInput}
                onChangeText={(masked, unmasked) => setPass(masked)}
                value={pass}
                placeholder='Digite sua senha'
                keyboardType='numeric'
                />
                <TouchableOpacity onPress={validaUsuario}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      alignItems: 'center',
      justifyContent: 'center',
      gap:15
    },
    form: {
        width: width,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    textInput: {
        padding: 5,
        height: 40,
        width: 200,
        borderColor: '#006eff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
  });