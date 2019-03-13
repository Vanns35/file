import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import {Actions} from 'react-native-router-flux';
   
class Payment2 extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Tenant 1',
         },
         {
            id: 1,
            name: 'Tenant 2',
         },
         {
            id: 2,
            name: 'Tenant 3',
         },
        
      ]
   }
   
   render() {
      return (
         <View>
         
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                   onPress={Actions.pay3}
                     key = {item.id}
                     style = {styles.container}
                     >
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default Payment2

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
})