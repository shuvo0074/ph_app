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
  onPressMuscularSysButton(){
    Actions.muscularSys()
  }
  onPressNervousSysButton(){
    Actions.nervousSys()
  }
  onPressRespiratorySysButton(){
    Actions.respiratorySys()
  }
  onPressUrinarySysButton(){
    Actions.urinarySys()
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
        source={require('../contents/circulatory_system.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Circulatory system</Text>
          <Text> Circulates blood around the body via the heart , arteries and veins. Delivering oxygen and nutrients to the organs and cells and carrying their waste products away.</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressDigSysButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/pic2.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Digestive system</Text>
          <Text>Mechanical Chemical processes that provide nutrients via the mouth, esophagus, stomach and intestines.</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressMuscularSysButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/muscular_system.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Muscular system</Text>
          <Text>Enables the body to move using muscles</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressNervousSysButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/nervous_system.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Nervous system</Text>
          <Text>Collects and processes informations from the senses via nerves and the brain and tells the muscle to contact tocause physical actions. </Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressUrinarySysButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/urinary_system.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Renal system/ urinary system</Text>
          <Text>The system where the kidneys filter blood</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressRespiratorySysButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/respiratory_system.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Respiratory system system</Text>
          <Text>The lungs and the trachea that brings air into and out of the body. </Text>
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
