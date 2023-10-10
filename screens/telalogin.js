import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'


const TelaLogin = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
     >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          //value={email}
          //onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Senha'
          //value={password}
          //onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry 
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          //onPress={identificadorLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //onPress={identificadorInscrição}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>


  )
}

export default TelaLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    inputContainer: {
      width: '80%'
  },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      bolderRadius: 10,
      marginTop: 5,
  },
      buttonContainer: {
        width: '60%',
        justifyContent:'center',
        alighItems: 'center',
        marginTop: 40 ,
  },
      button: {
        backgroundColor:'#0782F9',
        width:'100%',
        padding: 15,
        bordenRadius: 10,
        alignItems: 'center',
  },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        bordenColor: '#0782F9',
        bordenWidth: 2,
  },
       buttonText: {
        color:'white',
        fortWeight:'700',
        fortSize: 16,
  },
      buttonOutlineText: {
        color: '#0782f9',
        fortWeight: '700',
        fortSize: 16,

  },
 })

