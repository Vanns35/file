import React, { Component } from 'react';
import { Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { CardViewWithIcon,CardViewWithImage} from "react-native-simple-card-view";
import {Actions} from 'react-native-router-flux';

const options={
  title: ' Select Image ',
  takePhotoButtonTitle: 'Camera',
  chooseFromLibraryButtonTitle: 'Gallery',
}
export default class FlatDetails extends Component<{}> {
	render() {
   
		return(
     
			 <View style = {styles.container}>

         <Image resizeMode="cover"
         source={ {uri: 'https://aff.bstatic.com/images/hotel/max1024x768/483/48373839.jpg'} } 
          style={{width:300,
            height:200,
            margin:10,
            borderWidth:2,
            borderColor:'black',
          alignSelf:'center'}}/>


            
            <Text style={styles.text}>  Flat Name </Text>

            <Text style={styles.text}>  Description </Text>

            <Text style={styles.text}>  Tenants Assigned </Text>

            <Text style={styles.text}>  City </Text>

            <Text style={styles.text}>  Pin Code </Text>

            <Text style={styles.text}>  State </Text>

            <Text style={styles.text}>  Country </Text>

        
            <TouchableOpacity onPress={Actions.AddTenant} style={styles.button}>
             <Text style={styles.buttonText}>Assign Tenant</Text>
           </TouchableOpacity>

           <View style={ {flexDirection: "row",flexWrap     : 'wrap',} }>

           <TouchableOpacity style={styles.button1}>
             <Text style={styles.buttonText}>Edit</Text>
           </TouchableOpacity>
            <Text>   </Text>
           <TouchableOpacity style={styles.button1}>
             <Text style={styles.buttonText}>Delete</Text>
           </TouchableOpacity>

          
           </View>
           
         </View>

         
			);
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E0F0EC',
    flex: 1,
   
  
    
  },
   button: {
    width:280,
    backgroundColor:'#02edd5',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
      alignSelf:'center'
  },
   button1: {
   width             : (Dimensions.get("window").width / 2) - 10,
    backgroundColor:'#02edd5',
     borderRadius: 20,
    paddingVertical: 13,
    alignSelf:'center'
    
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  
  text:{
    color:'#093a39',
    fontSize : 20,
    marginLeft:15,
    fontFamily: 'normal',
    paddingBottom: 10,
  }
});

 