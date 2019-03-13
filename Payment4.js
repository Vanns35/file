import React, { Component } from 'react';
import { Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Header,
  ScrollView,
  Picker
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import {Actions} from 'react-native-router-flux';

export default class Payment4 extends Component{
 constructor(props){
    super(props)
    this.state = {
      pdate:"2019-01-01",
      fdate:"2019-01-01",
      tdate:"2019-01-01",
    }
 
  }

	render() {
   
		return(
			 <View style = {styles.container}>

       <ScrollView>
       
            <TextInput 
              placeholder = "Payment Amount"       
               underlineColorAndroid="black"
               style={styles.textInput}
            />
  

              <Text style={styles.text}>Payment Date </Text>
                <DatePicker
                  style={{width: 300}}
                 date={this.state.pdate}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="1950-05-01"
                  maxDate="2050-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft:0
                    },
                    dateInput: {
                      marginLeft: 126
                    }
                   
                  }}
                  onDateChange={(pdate) => {this.setState({pdate: pdate})}}
      />

        
    
               <Text style={styles.text}> Rent from Date </Text>
                <DatePicker
                  style={{width: 300}}
                 date={this.state.fdate}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="1950-05-01"
                  maxDate="2050-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft:0
                    },
                    dateInput: {
                      marginLeft: 126
                    }
                   
                  }}
                  onDateChange={(fdate) => {this.setState({fdate: fdate})}}
      />

                 <Text style={styles.text}> Rent to Date </Text>
                <DatePicker
                  style={{width: 300}}
                 date={this.state.tdate}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="1950-05-01"
                  maxDate="2050-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft:0
                    },
                    dateInput: {
                      marginLeft: 126
                    }
                   
                  }}
                  onDateChange={(tdate) => {this.setState({tdate: tdate})}}
      />

              <TextInput 
              placeholder = "Comment"       
               underlineColorAndroid="black"
               style={styles.textInput}
            />
           
            <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Add Payment</Text>
           </TouchableOpacity>
           </ScrollView>
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
  text:{
    color:'gray',
    fontSize : 18,
    paddingLeft :20,
    marginVertical: 10,
  }
});

 