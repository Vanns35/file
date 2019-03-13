import React, { Component } from 'react';
import ValidationComponent from 'react-native-form-validator';

import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput
} from 'react-native';


import {Actions} from 'react-native-router-flux';

export default class Oregister extends ValidationComponent <{}>{
  constructor(props){
    super(props)
   
   this.state = {
      name: '',
      uname:'',
      email: '',
      mailValidate:true,
      phoneno:'',
      phoneValidate:true,
      pass: '',
      confirmpass:'',
   }

}
  goBack() {
      Actions.pop()
  }

vali(text,type)
{
  mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  phoneformat=/^\d{10}$/

  this.validate({
      name: {minlength:3, maxlength:7, required: true},
      uname:{required:true},
      //email: {email: true},
      phoneno: {phoneno: true},
      
    });
  
  if(type=='mail')
  {
    if(mailformat.test(text))
    {
      this.setState({
        mailValidate:true,
      })
    }
    else
    {
      this.setState({
        mailValidate:false,

      })
      
    }
  }
  else if(type=='phone')
  {
    if(phoneformat.test(text))
    {
      this.setState({
        phoneValidate:true,
      })
    }
    else
    {
      this.setState({
        phoneValidate:false,
      })
    }
    
  }

  

}  

	render() {
		return(
			<View style={styles.container}>
				 <View>
         <Text style = {styles.title}> SIGN UP </Text>
         
    </View> 
        <TextInput style = {styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Name"
              placeholderTextColor = "black"
              selectionColor="#fff"
              onChangeText={(text) => this.vali(text,'name')}
             />
             

              <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Username"
              placeholderTextColor = "black"
              selectionColor="#fff"
              onChangeText={(text) => this.vali(text,'uname')}
             />
             
              
              <TextInput style={[styles.inputBox , !this.state.mailValidate ? styles.error:null]}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "black"
              selectionColor="#fff"
              onChangeText={(text) => this.vali(text,'mail')}
             />

              <TextInput style = {[styles.inputBox , !this.state.phoneValidate ? styles.error:null]}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Phone"
              placeholderTextColor = "black"
              selectionColor="#fff"
              onChangeText={(text) => this.vali(text,'phone')}
              />

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              placeholderTextColor = "black"
              selectionColor="#fff"
              secureTextEntry={true}
              />

               <TextInput secureTextEntry={true} style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Confirm Password"
              placeholderTextColor = "black"
              selectionColor="#fff"
              />

              <TouchableOpacity onPress={this.vali} style={styles.button}
              >
             
             <Text style={styles.buttonText}  >SignUp</Text>
            </TouchableOpacity>  
            <Text>
            {this.getErrorMessages()}
          </Text>   


              
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
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
    color:'#ffffff',
    margin:15,
  
  },
  error: {
    borderWidth:2,
    borderColor:'red',
   },
   title:{
    fontSize:20,
    textAlign:'center',
    padding:18
  },
    button: {
    width:300,
    backgroundColor:'#02edd5',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
  }
});
