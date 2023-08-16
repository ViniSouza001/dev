import react from "react"
import { Text, View, Image, TextInput } from "react-native"
import styles from "./styles"

function TelaLogin () {
   return (
      <View style={styles.container}>
         <Image source={require('../../../assets/Fundo.png')} style={styles.background} />
         <View style={styles.form}>
            <Image source={require('../../../assets/capacete.png')} style={styles.capacete} />
            <View style={styles.divForm}>
               <Image source={require('../../../assets/Logo.png')} style={styles.logo} />
               <View style={styles.inputs}>
                  <Text style={styles.label}>ID</Text>
                  <TextInput style={styles.input} />
                  <Text style={styles.label}>Senha</Text>
                  <TextInput style={styles.input} />
               </View>
            </View>
         </View>
      </View>
   )
}

export default TelaLogin