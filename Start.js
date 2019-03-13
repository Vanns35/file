import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity ,
  Image,
  FlatList,

} from 'react-native';

import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';

export default class Start extends Component<{}> {
  

  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource : [] }
  }

  async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const response = await fetch('http://192.168.2.21/vanns/App/image.php');
            const pokemon = await response.json();
            this.setState({dataSource: pokemon, isLoading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }


renderItem(data) {
        return (
          <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    <View  style={styles.listItemContainer}>
                        <Text style={styles.pokeItemHeader}>{data.item.id}</Text>
                        <Text style={styles.pokeItemHeader}>{data.item.image}</Text>
                        <Image
               source={ {uri: data.item.image} }
               style={styles.image}
               />
                    </View>
                </TouchableOpacity>
    );
      }
  

  render() {

    if(this.state.isLoading){

      return(
      <View >  
                    <FlatList 
                    data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={({id}, index) => id}
                    />
      </View>    
          );
    }
    else {

    return(
      <View style={styles.container}>  
 <Logo/>
                   <TouchableOpacity
                    onPress={Actions.ologin}>
                    <Text style={styles.buttonText}>OWNER</Text>
                     <Image
               source={require('../images/tenant1.jpeg')}
               style={styles.image}
               />

                     
                  </TouchableOpacity>

                 <TouchableOpacity
                    onPress={Actions.ologin}>
                    <Text style={styles.buttonText}>TENANT</Text>
                     <Image
               source={require('../images/tenant1.jpeg')}
               style={styles.image}
               />

                     
                  </TouchableOpacity>
      </View>    
          );
        }
      }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E0F0EC',
    flex: 1,
    alignItems:'center',
    justifyContent :'center',

  },
   buttonText: {
    fontSize:20,
    fontWeight:'500',
    color:'#02edd5',
    textAlign:'center',
    fontWeight: 'bold',
  },
  image:{
    height:150,
    width:150,
    marginVertical:20,

  }

});