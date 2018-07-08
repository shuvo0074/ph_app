import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight,ScrollView } from 'react-native';
import { Actions} from 'react-native-router-flux'
import email from 'react-native-email';
import call from 'react-native-phone-call'


const args1 = {
  number: '+880247118757', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
const args2 = {
  number: '+880247118642', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
const args3 = {
  number: '+8801819274289', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
const args4 = {
  number: '+8801969105093', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

export default class about extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
    })
  }
  callNumber1() {
    call(args1).catch(console.error)
  }
  callNumber2() {
    call(args2).catch(console.error)
  }
  callNumber3() {
    call(args3).catch(console.error)
  }
  callNumber4() {
    call(args4).catch(console.error)
  }
  
  handleEmail = () => {
    const to = ['info@era.com.bd', 'info@era.com.bd'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: ['info@era.com.bd', 'info@era.com.bd'], // string or array of email addresses
        bcc: 'info@era.com.bd', // string or array of email addresses
        subject: 'Email',
        body: 'Some body right here'
    }).catch(console.error)
}

  render() {
    return (

      <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.header,{backgroundColor: 'red'}]} >
      <Text style={styles.headerFonts}>
      Rangs Pharmaceuticals Limited App
      </Text>
      </View>

      <Text style={styles.headerFonts} >
        This is a skill building application about Rangs Pharmaceuticals Limited products.
      </Text>

      <View style={[styles.header,{backgroundColor: 'green'}]} >
      <Text style={styles.headerFonts}>
      Rangs Pharmaceuticals Limited App
      </Text>
      </View>

      <View>
        <Text>
          Address: 
          Bengal center (4th, 6th and 9th floor),
          28. Topkhana Road, Dhaka-1000,
          Bangladesh
          Phone:
        </Text>
        <TouchableOpacity onPress={this.callNumber1} style={styles.buttonStyle}>
          <Text>
            +880247118757
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.callNumber2} style={styles.buttonStyle}>
            <Text>+880247118642</Text>
        </TouchableOpacity>
        <Text>
          Mobile:
        </Text>
        <TouchableOpacity onPress={this.callNumber3} style={styles.buttonStyle}>
            <Text>+8801819274289</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.callNumber4} style={styles.buttonStyle}>
            <Text>+8801969105093</Text>
        </TouchableOpacity>
        <Text>
          E-mail:
        </Text>
        <TouchableOpacity onPress={this.handleEmail} style={styles.buttonStyle}>
        <Text>
        info@era.com.bd
        </Text>
        </TouchableOpacity>
        <Text>
          Website:
          www.erainfotechbd.com
        </Text>
      </View>
      <View style= {{height: 40}}>

      </View>

      </ScrollView>
    );
  }
}
let H=Dimensions.get('window').height
let W=Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

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
      margin: 5,
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
    }
});
