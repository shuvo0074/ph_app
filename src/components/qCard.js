import React from 'react';
import { View,Text, StyleSheet,ScrollView,TouchableOpacity, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import QCardData from '../data/qCardData'

export default class qCard extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
      cardIndex: 0,
      W: Dimensions.get('window').width,
      H: Dimensions.get('window').height,

        })
      Dimensions.addEventListener('change', () => {
        this.setState({
        W: Dimensions.get('window').width,
        H: Dimensions.get('window').height

      });
      })
    //this._onPressAdd = this._onPressAdd.bind (this)
  }

  render() {
 
      return (
        <View style ={{flex:1,alignItems: 'center', justifyContent: 'center'}} >
        
        <ScrollView style={{height: this.state.H/2 }} >

        <Text style={{fontWeight: 'bold', fontSize: 18}} >
          {QCardData[this.state.cardIndex].question}
        </Text>
        <Text style={{ fontSize: 15}} >
          {QCardData[this.state.cardIndex].answer}
        </Text>
        </ScrollView>

        {
          QCardData[this.state.cardIndex+1]==null?
        <View style={styles.buttonContainer} >
        <TouchableOpacity 
        style= {[styles.buttonStyle,{ width: ((this.state.W/2) - 20) }]}
        onPress= {()=>{
          this.setState({cardIndex: this.state.cardIndex-1})
        }} >
        <Text>
        Previous
        </Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style= {[styles.buttonStyle,{width: ((this.state.W/2) - 20) }]}
          onPress= {()=>{
        }} >
        <Text>
        Finish
        </Text>
        </TouchableOpacity>
        </View>
        :
          this.state.cardIndex==0?
          <View style={styles.buttonContainer} >
            <TouchableOpacity 
            style= {[styles.buttonStyle,{marginLeft:((this.state.W/2)), width: ((this.state.W/2) - 20) }]}
            onPress= {()=>{
            this.setState({cardIndex: this.state.cardIndex+1})
            }} >
            <Text>
            Next
            </Text>
            </TouchableOpacity>
            </View>
          :
          <View style={styles.buttonContainer} >
          <TouchableOpacity 
            style= {[styles.buttonStyle,{width: ((this.state.W/2) - 20) }]}
            onPress= {()=>{
              this.setState({cardIndex: this.state.cardIndex-1})
            }} >
            <Text>
            Previous
            </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {[styles.buttonStyle,{width: ((this.state.W/2) - 20) }]}
            onPress= {()=>{
            this.setState({cardIndex: this.state.cardIndex+1})
            }} >
            <Text>
            Next
            </Text>
            </TouchableOpacity>
          </View>
        }
        </View>
        )
    
    
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  buttonContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical:7, 
    justifyContent: 'center'
  },
  buttonStyle:{
    justifyContent: 'center',
    height: 25,
    borderRadius: 3,
    padding: 25,
    borderWidth:2,
    borderRadius:10,
    borderColor: '#747d8c',
    marginHorizontal: 8,
    backgroundColor: '#a4b0be'
  },
});