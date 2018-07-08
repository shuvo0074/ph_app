import React from 'react';
import { StyleSheet,StatusBar, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight,ScrollView,Platform } from 'react-native';
import { Actions} from 'react-native-router-flux'



export default class home extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
      W: Dimensions.get('window').width
        })
      Dimensions.addEventListener('change', () => {
        this.setState({
        W: Dimensions.get('window').width
      })
      })
    //this._onPressAdd = this._onPressAdd.bind (this)
  }

  onPressCircSysButton(){
    Actions.circSystem()
  }
  onPressDigSysButton(){
    Actions.digSystem()
  }
  onPressQuizButton(){
    Actions.quiz()
  }
  onPressContactButton(){
    Actions.contact()
  }
  onPressAboutButton(){
    Actions.about()
  }
  onPressHelpButton(){
    Actions.help()
  }

  render() {
    return (
    <ScrollView contentContainerStyle={styles.container}>
    <StatusBar
    color= 'red'
    //hidden={true}    
    />
    
    <TouchableOpacity
      onPress={this.onPressCircSysButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/dig_system.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Human Circulatory system</Text>
          <Text> Human Circulatory system</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressDigSysButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/dig_system.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Digestive system</Text>
          <Text>Human digestive system</Text>
        </View>
      </View>
      </TouchableOpacity>

      <View style={{height: 50}} >
      </View>
    
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    alignItems: 'center',
    marginTop: 25,
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
      height: 30,
      width: 80,
      borderWidth: 3,
      borderColor: '#192a56',
      borderRadius: 5,
      backgroundColor: '#1e3799',
      paddingTop: 2,
      },
    buttonFonts: {
      fontWeight: 'bold',
      color: '#27ae60',
      fontSize: 15,
      paddingLeft: 10,
    },
    contentStyle:{
        backgroundColor : 'white',
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth:2,
        borderColor: '#aaa69d',
        margin: 3
      }
});
