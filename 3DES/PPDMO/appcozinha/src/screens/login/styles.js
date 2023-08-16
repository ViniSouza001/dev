import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
   background: {
      width: "100vw",
      height: "200vw",
      zIndex: -1,
   },
   container: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
   },
   form: {
      position: "absolute",
      width: '100%',
      height: '100%',
      alignItems: 'center',
      marginTop: 20
   },
   capacete: {
      width: '80px',
      height: '80px',
   },
   divForm: {
      padding: 20,
      backgroundColor: 'rgba(0,0,0,0.5)'
   },
   label: {
      color: 'white',
      fontSize: 20,
   },
   input: {
      width: 200,
      height: 20,
      backgroundColor: '#ffffff',
      outline: 'none',
   },
   logo: {
      width: '100%',
      height: '100%',
   }

})

export default styles