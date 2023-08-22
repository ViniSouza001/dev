import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
   background: {
      width: "100vw",
      height: "100vh",
      zIndex: -1,
   },
   container: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
   },
   form: {
      position: "absolute",
      width: '100%',
      height: '100%',
      alignItems: 'center',
      marginTop: 20,
   },
   capacete: {
      width: '80px',
      height: '80px',
   },
   divForm: {
      width: '300px',
      height: 'auto',
      padding: 20,
      backgroundColor: 'rgba(0,0,0,0.5)',
      marginTop: '30px',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem'
   },
   label: {
      color: 'white',
      fontSize: 20,
   },
   input: {
      width: 200,
      height: 20,
      padding: '15px',
      backgroundColor: '#ffffff',
      outline: 'none',
   },
   inputs: {
      gap: '1rem'
   },
   logo: {
      color: 'white',
      fontSize: '25px'
   },
   button: {
      backgroundColor: 'rgb(169,4,4)',
      alignItems: "center",
      padding: 3,
      margin: 20,
      borderRadius: 10
   },
   loginTxt: {
      fontSize: 30
   }

})

export default styles