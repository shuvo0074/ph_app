import { StyleSheet, Text, View, 
  TouchableOpacity,FlatList,Dimensions,
  Image,Alert,TouchableHighlight,ScrollView,
  TextInput
} from 'react-native';
import React from 'react';
import { Actions} from 'react-native-router-flux'

export default class help extends React.Component {

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
        <View style={{padding: 10, marginTop: 25}} >
            <TextInput
            onChangeText={
              (txt)=>{
                this.setState({pName: txt})
              }
            }
            />

            <TextInput
            onChangeText={
              (txt)=>{
                this.setState({pGenName: txt})
              }
            }
            />

            <TouchableOpacity 
            onPress={()=>{
              
              Actions.circSystem()
            }}
            >
              <Text>
                Save
              </Text>
            </TouchableOpacity>

            <Text>
            </Text>

        </View>
    );
  }
}

