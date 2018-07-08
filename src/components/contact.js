import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight,ScrollView } from 'react-native';
import { Actions} from 'react-native-router-flux'
import {MapView} from 'react-native-maps';
import email from 'react-native-email';
import call from 'react-native-phone-call'


const args = {
  number: '+880029123560', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
export default class contact extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
    })
  }
  callNumber() {
    call(args).catch(console.error)
  }
  handleEmail = () => {
    const to = ['info@era.com.bd', 'info@era.com.bd'] 
    email(to, {
        cc: ['info@era.com.bd', 'info@era.com.bd'],
        bcc: 'info@era.com.bd',
        subject: 'Email',
        body: 'Some body right here'
    }).catch(console.error)
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} >
        <View style={[styles.header,{backgroundColor: 'red'}]} >
          <Text style={styles.headerFonts}>
            Head Office
          </Text>
        </View>
        <Text style={styles.headerFonts}>
          Rangs Pharmaceuticals Limited
        </Text>
        <Text>
          Rangs Bhaban (Level-5),117/a,
          Bijoy Sharani,
          Old Airport Road, Tejgaon,
          Dhaka-1215,Bangladesh.
          Contact to HR and Admin:
        </Text>

        <TouchableOpacity onPress={this.handleEmail} style={styles.buttonStyle}>
            <Text>info@rangspharma.net</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.callNumber} style={styles.buttonStyle}>
            <Text>+880029123560</Text>
        </TouchableOpacity>

      
      </ScrollView>
    );
  }
}
let H=Dimensions.get('window').height
let W=Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    top:0,
    left:0,
    bottom:0,
    right:0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  header: {
    alignItems: 'center',
  },
  headerFonts: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  listItemFonts: {
    fontSize: 12,
    color: '#ff6b81',
    padding: 5,
    alignItems: 'center',
  },
    fonts: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#27ae60',
      alignItems: 'center', 
    },
    buttonStyle: {
      margin: 10,
      height: 50,
      borderWidth: 2,
      borderColor: '#192a56',
      borderRadius: 3,
      padding: 5,
      borderColor: '#747d8c',
      backgroundColor: '#a4b0be',
      justifyContent: 'center',
      marginHorizontal: 40,
      },
    buttonFonts: {
      fontWeight: 'bold',
      color: '#27ae60',
      fontSize: 15,
      paddingLeft: 10,
    },
    header: {
      alignItems: 'center',
    },
    headerFonts: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10
    },
    map: {
    justifyContent: 'flex-end',
    margin: 15,
    }
});
