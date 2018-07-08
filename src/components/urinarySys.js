import { StyleSheet, Text, View, 
  TouchableOpacity,FlatList,Dimensions,
  Image,Alert,TouchableHighlight,ScrollView,
  TextInput
} from 'react-native';
import React from 'react';
import { Actions} from 'react-native-router-flux'

export default class urinarySys extends React.Component {

  constructor (props){
    super(props)
    this.state = ({
      pName: null,
      pGenName: null,
      W: Dimensions.get('window').width,
      H: Dimensions.get('window').height,

        })
      Dimensions.addEventListener('change', () => {
        this.setState({
        W: Dimensions.get('window').width,
        H: Dimensions.get('window').height

      });
      })
  }
  render() {
    return (
      <View style={{flex:1,alignItems: 'center',padding: 5}} >
      <Image
        source= {require('../contents/urinary_system.png')}
        style={{flex:1,width: this.state.W}}
        />

        </View>
    );
  }
}

