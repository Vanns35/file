import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, 
  Alert,
  Dimensions,
  ScrollView,
  Image,FlatList,DeviceEventEmitter
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { CardViewWithIcon,CardViewWithImage} from "react-native-simple-card-view";


export default  class DashBoard extends Component{

  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource : [] }
  }

  componentWillmount = () => {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  }

  async componentWillMount() {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
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
    const miniCardStyle = {
    shadowColor       : '#000000',
    shadowOffsetWidth : 2,
    shadowOffsetHeight: 2,
    shadowOpacity     : 0.1,
    hadowRadius       : 5,
    bgColor           : '#ffffff',
    padding           : 5,
    margin            : 5,
    borderRadius      : 3,
    elevation         : 3,
    width             : (Dimensions.get("window").width / 2) - 10
    };
    return (
    

    <View style={ {alignItems: "center",flexDirection: "row",flexWrap: 'wrap',} }>
      <CardViewWithImage
       width={(Dimensions.get("window").width / 2) - 10}
       height={ 30 }
       source={ {uri: data.item.image} } 
       title={ data.item.id }
       titleFontSize={ 16 }
       style={ miniCardStyle }
       roundedImage={ false }
       imageWidth={100}
       imageHeight={ 100 }
       onPress={Actions.DisplayBuilding}
       imageMargin={ {top: 10} }
      />

      <CardViewWithImage
       width={(Dimensions.get("window").width / 2) - 10}
       height={ 30 }
       source={ {uri: data.item.image} } 
       title={ data.item.id }
       titleFontSize={ 16 }
       style={ miniCardStyle }
       roundedImage={ false }
       imageWidth={100}
       imageHeight={ 100 }
       onPress={Actions.DisplayBuilding}
       imageMargin={ {top: 10} }
      />
    </View>

    );
  }

  render() {

    if(!this.state.isLoading){

      return(
        <View style={styles.container}>
          <Text style= {styles.welcome}> Your Buildings </Text>
          <View style={ {alignItems: "center",flexDirection:"row",flexWrap: 'wrap',}}>
          <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={({id}, index) => id}
          />
        </View>

        
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add Building" onPress={Actions.AddBuilding}>
            <Icon name="md-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item onPress={Actions.AddTenant} buttonColor='#3498db' title="Add Tenant">
            <Icon name="md-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="View Tenant" onPress={Actions.DisplayTenant}>
            <Icon name="md-list" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#f4427d' title="Payments" onPress={Actions.pay1}>
            <Icon name="md-cash" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>    
          );
    }
  else
  {
    const miniCardStyle = {
    shadowColor       : '#000000',
    shadowOffsetWidth : 2,
    shadowOffsetHeight: 2,
    shadowOpacity     : 0.1,
    hadowRadius       : 5,
    bgColor           : '#ffffff',
    padding           : 5,
    margin            : 5,
    borderRadius      : 3,
    elevation         : 3,
    width             : (Dimensions.get("window").width / 2) - 10
    };
  return (
    
    
    <View style={styles.container}>
        <View style={styles.container}>
        <Text style= {styles.welcome}> Your buildings are displayed here </Text>
         <View style={ {alignItems   : "center",justifyContent: "center",flexDirection: "row",flexWrap     : 'wrap',} }>
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Building 1' }
            contentFontSize={ 20 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
          />

          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Building 1' }
            contentFontSize={ 20 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
          />
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Building 1' }
            contentFontSize={ 20 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
          />
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Building 1' }
            contentFontSize={ 20 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
          />
         </View>
      </View>
        
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add Building" onPress={Actions.addbuilding}>
            <Icon name="md-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item onPress={Actions.addtenant} buttonColor='#3498db' title="Add Tenant">
            <Icon name="md-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="View Tenant" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-list" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#f4427d' title="Payments" onPress={Actions.pay1}>
            <Icon name="md-cash" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
   
  );
  }
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F0EC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  try: {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',},
  
});
