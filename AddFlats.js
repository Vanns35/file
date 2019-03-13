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

import ImagePicker from 'react-native-image-picker';

const options={
  title: ' Select Image ',
  takePhotoButtonTitle: 'Camera',
  chooseFromLibraryButtonTitle: 'Gallery',
}
export default class AddFlats extends Component<{}> {
    constructor(props){
    super(props);
    this.state={
      avatarSource: null,
      pic:null
    }
  }

  myfun=()=>{
  
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('Image Picker Error: ', response.error);
    }

    else {
      let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source,
        pic:response.data
      });
    }
  });
}
 

  render() {
   
    return(
      <ScrollView>
       <View style = {styles.container}>

            
            <TextInput 
               
               placeholder = "Building Name"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />
            
            <TextInput 
               
               placeholder = "No of Flats"
               
               underlineColorAndroid="black"
               style={styles.textInput}
              
               />

               <TextInput 
               
               placeholder = "Address"
               
               underlineColorAndroid="black"
               style={styles.textInput}
              
               />

               <TextInput 
               
               placeholder = "City"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />
                <TextInput 
               
               placeholder = "Pin Code"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />

               <TextInput 
               
               placeholder = "State"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />

               <TextInput 
               
               placeholder = "Country"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />

               <TouchableOpacity style={{backgroundColor:'gray',margin:10,padding:10}}
        onPress={this.myfun}>
          <Text style={styles.text}>Select Building Image</Text>
        </TouchableOpacity>

               <Image source={this.state.avatarSource}
          style={{width:300,
            height:200,
            margin:10,
            borderWidth:2,
            borderColor:'black',
            alignSelf:'center'}}/>


        

              
            <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Add</Text>
           </TouchableOpacity>
           
         </View>

         </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E0F0EC',
    flex: 1,
  },
  
  
   textInput:{
    height:40,
    fontSize : 18,
    paddingLeft :20,
    marginVertical: 10,
   },
   button: {
    width:300,
    backgroundColor:'#02edd5',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,alignSelf:'center'
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',alignSelf:'center'
  },
   title:{
    backgroundColor:'#02edd5',
    fontSize:20,
    textAlign:'center',
    padding:18
  },
  text:{
    color:'black',
    fontSize : 18,
    
  }
});
