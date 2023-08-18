import react from "react"
import { useState, useEffect } from "react"
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import styles from "./styles"

function TelaLogin({ navigation }) {

   // parte de login para motoboys (futuramente)

   // const [email, setEmail] = useState('')
   // const [senha, setSenha] = useState('')
   // const uri = 'http://localhost:8081'

   // useEffect(() => {
   //    fetch(uri + '/motoboys', { method: 'GET' })
   //       .then(response => response.json())
   //       .then(data => console.log(data))
   // })

   // function autenticacao() {
   //    console.log(email)
   //    console.log(senha)
   // }

   function navegacao() {
      navigation.navigate('PedidosScreen')
   }

   return (
      <View style={styles.container}>
         <Image source={require('../../../assets/Fundo.png')} style={styles.background} />
         <View style={styles.form}>
            <Image source={require('../../../assets/capacete.png')} style={styles.capacete} />
            <View style={styles.divForm}>
               <Text style={styles.logo}>Vinici'os</Text>
               <View style={styles.inputs}>
                  {/* <View>
                     <Text style={styles.label}>Email</Text>
                     <TextInput style={styles.input} onChangeText={e => setEmail(e)} />
                  </View>
                  <View>
                     <Text style={styles.label}>Senha</Text>
                     <TextInput style={styles.input} onChangeText={e => setSenha(e)} />
                  </View> */}
                  <TouchableOpacity style={styles.button}>
                     <Text style={styles.loginTxt} onPress={() => { navegacao() }}>Pedidos</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </View>
   )
}

export default TelaLogin