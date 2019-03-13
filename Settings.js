import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import {Actions} from 'react-native-router-flux';


   
export default class Settings extends Component <{}>{
  
   render() {
      return (
         
         <View style={styles.container}>

             <TouchableOpacity
                     style = {styles.touch}
                    onPress={Actions.Profile}>
                     <Text style = {styles.text}>
                        Account
                     </Text>
                  </TouchableOpacity>

                   <TouchableOpacity  onPress={Actions.pay1} style={styles.touch}>
             <Text style={styles.text}>Payments</Text>
           </TouchableOpacity>  

                  <TouchableOpacity
                     style = {styles.touch}
                    onPress={Actions.About}>
                     <Text style = {styles.text}>
                        About
                     </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                     style = {styles.touch}
                    onPress={Actions.Contact}>
                     <Text style = {styles.text}>
                        Contact
                     </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                     style = {styles.touch}
                    onPress={Actions.Routes}>
                     <Text style = {styles.text}>
                        Logout
                     </Text>
                  </TouchableOpacity>

         </View>
        
      )
   }
}


const styles = StyleSheet.create ({
   container: {
      backgroundColor: '#E0F0EC',
      flex:1
   },
   text: {
      color: 'black',
      fontSize:16
   },
   touch:{
       padding: 18,
      marginTop: 3,
     backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 10,
   },
})