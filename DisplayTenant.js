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


export default class TenantDetails extends Component{
 constructor(props){
    super(props)
    this.state = {
      mdate:"2019-01-01",
      ddate:"2019-01-01",
      day:"",
      building:"",
      flat:"",
    }

     
  }
  updateDay = (day) => {
      this.setState({ day: day })
   }
   updateBuilding=(building) =>{
      this.setState({building: building})
   }
   updateFlat = (flat) =>{
      this.setState({flat: flat})
   }

	render() {
   
		return(
       <ScrollView>
			 <View style = {styles.container}>

      
      

            <TextInput 
              placeholder = "First Name"       
               underlineColorAndroid="black"
               style={styles.textInput}
            />
            
            <TextInput 
               placeholder = "Last Name"
               underlineColorAndroid="black"
               style={styles.textInput}
             />

              <Picker selectedValue = {this.state.building} onValueChange = {this.updateBuilding}
            >
               <Picker.Item label = "Select Buiding" value = "Select Buiding" />
                <Picker.Item label = "Buiding 1" value = " Buiding 1" />
                 <Picker.Item label = "Buiding 2" value = "Buiding 2" />
               </Picker>

                <Picker selectedValue = {this.state.flat} onValueChange = {this.updateFlat}
            >
               <Picker.Item label = "Select Flat" value = "Select Buiding" />
                <Picker.Item label = "Flat 1" value = " Flat 1" />
                 <Picker.Item label = "Flat 2" value = "Flat 2" />
               </Picker>

             <TextInput 
               placeholder = "Email"
               underlineColorAndroid="black"
               style={styles.textInput}
             />

             <TextInput  
               placeholder = "Phone No"
               underlineColorAndroid="black"
               style={styles.textInput}
             />

            <TextInput 
               placeholder = "Emergency Phone"
               underlineColorAndroid="black"
               style={styles.textInput}
            />

             <TextInput 
               placeholder = "Address"
               underlineColorAndroid="black"
               style={styles.textInput}
            />

            <TextInput 
              placeholder = "Deposit Rs."
              underlineColorAndroid="black"
              style={styles.textInput}
            />

              <Text style={styles.text}> Deposit Date </Text>
                <DatePicker
                  style={{width: 300}}
                 date={this.state.ddate}
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
                  onDateChange={(ddate) => {this.setState({ddate: ddate})}}
      />

            <TextInput 
               placeholder = "Rent"
               underlineColorAndroid="black"
               style={styles.textInput}
            />
             <Text style={styles.text}> Due Day Every Month </Text>
             <Picker selectedValue = {this.state.day} onValueChange = {this.updateDay}>
               <Picker.Item label = "1" value = "1" />
               <Picker.Item label = "2" value = "2" />
               <Picker.Item label = "3" value = "3" />
               <Picker.Item label = "4" value = "4" />
               <Picker.Item label = "5" value = "5" />
               <Picker.Item label = "6" value = "6" />
               <Picker.Item label = "7" value = "7" />
               <Picker.Item label = "8" value = "8" />
               <Picker.Item label = "9" value = "9" />
               <Picker.Item label = "10" value = "10" />
               <Picker.Item label = "11" value = "11" />
               <Picker.Item label = "12" value = "12" />
               <Picker.Item label = "13" value = "13" />
               <Picker.Item label = "14" value = "14" />
               <Picker.Item label = "15" value = "15" />
               <Picker.Item label = "16" value = "16" />
               <Picker.Item label = "17" value = "17" />
               <Picker.Item label = "18" value = "18" />
               <Picker.Item label = "19" value = "19" />
               <Picker.Item label = "20" value = "20" />
               <Picker.Item label = "21" value = "21" />
               <Picker.Item label = "22" value = "22" />
               <Picker.Item label = "23" value = "23" />
               <Picker.Item label = "24" value = "24" />
               <Picker.Item label = "25" value = "25" />
               <Picker.Item label = "26" value = "26" />
               <Picker.Item label = "27" value = "27" />
               <Picker.Item label = "28" value = "28" />
               <Picker.Item label = "29" value = "29" />
               <Picker.Item label = "30" value = "30" />
               <Picker.Item label = "31" value = "31" />
            </Picker>
           
               

               <Text style={styles.text}> Move In Date </Text>
                <DatePicker
                  style={{width: 300}}
                 date={this.state.mdate}
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
                  onDateChange={(mdate) => {this.setState({mdate: mdate})}}
      />

           <TextInput 
               placeholder = "Id Proof"
               underlineColorAndroid="black"
               style={styles.textInput}
            />

           <TextInput 
               placeholder = "Documents"
               underlineColorAndroid="black"
               style={styles.textInput}
            />

            <TextInput 
               placeholder = "Comment"
               underlineColorAndroid="black"
               style={styles.textInput}
            />
            <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Create</Text>
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

 