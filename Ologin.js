import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity 
} from 'react-native';

import Logo from '../components/Logo';


import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

  

  render() {
    return(
      <View style={styles.container}>
        <Logo/>
        
        <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "black"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "black"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity  onPress={Actions.index} style={styles.button}>
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>     

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don''t have an account yet?</Text>
          <TouchableOpacity onPress={Actions.oregister}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
        </View>
      </View> 
      )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E0F0EC',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
    color:'black',
    fontSize:16
  },
  signupButton: {
    color:'#02edd5',
    fontSize:16,
    fontWeight:'500'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'black',
    marginVertical: 10,

  },
  button: {
    width:300,
    backgroundColor:'#02edd5',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});
