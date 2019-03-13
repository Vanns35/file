import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import {Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
   
class Payment3 extends Component {
   state = {
      names: [
         {
            id: 0,
            name: '1 Nov 18 - 30 Nov 18',
         },
         {
            id: 1,
            name: '1 Dec 18 - 30 Dec 18',
         },
         {
            id: 2,
            name: '1 Jan 19 - 30 Jan 19',
         },
        
      ]
   }
   
   render() {
      return (
         <View>
        
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
            <View>
            <TouchableOpacity onPress={Actions.pay4}
            style={styles.button}>
             <Text style={styles.buttonText}>Add New Payments</Text>
           </TouchableOpacity>

             
         </View>
         </View>
      )
   }
}
export default Payment3

const styles = StyleSheet.create ({
   container: {
      padding: 18,
      marginTop: 3,
      backgroundColor: '#E0F0EC',
      alignItems: 'center',
      borderRadius: 10,
   },
   text: {
      color: 'black',
      fontSize:16
   },
    title:{
    backgroundColor:'#02edd5',
    fontSize:20,
    textAlign:'center',
    padding:18
  },
   button: {
    width:300,
    backgroundColor:'#02edd5',
     borderRadius: 25,
      marginBottom:150,
      paddingVertical: 13,
      alignItems: 'center',
      marginLeft:25,
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
})