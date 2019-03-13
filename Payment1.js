import React, { Component } from 'react';
import { Text,
  StyleSheet,
  View,
  Picker,
 TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class Payment1 extends Component {
   constructor(props){
    super(props)
    this.state = {
      building:"",
    }  
  }

  updateBuilding = (building) => {
      this.setState({building: building })
   }
 

	render() {
   
		return(
			 <View style = {styles.container}>
           
       
            <Picker selectedValue = {this.state.building} onValueChange = {this.updateBuilding}
            >
               <Picker.Item label = "Select Buiding" value = "Select Buiding" />
                <Picker.Item label = "Buiding 1" value = " Buiding 1" />
                 <Picker.Item label = "Buiding 2" value = "Buiding 2" />
               </Picker>

            <TouchableOpacity onPress={Actions.pay2}
            style={styles.button}>
             <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>
           
         </View>
			);
	}
}

const styles = StyleSheet.create({
  container : {
   backgroundColor: '#E0F0EC',
    flex: 1,
    margin :20,
  
    
  },
  
  
   button: {
    width:300,
    backgroundColor:'#02edd5',
     borderRadius: 25,
      marginVertical: 90,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
   title:{
    backgroundColor:'#02edd5',
    fontSize:20,
    textAlign:'center',
    padding:18
  },
});

 