import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight } from 'react-native';
import { Actions} from 'react-native-router-flux'
import DigSystemData from '../data/digSystemData'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import QCard from './qCard'
import TabView from './tabView'

class DigSystemComponent extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
      W: Dimensions.get('window').width,
    })
    Dimensions.addEventListener('change', () => {
      this.setState({
      W: Dimensions.get('window').width
    })
    })
  }
  render(){
    return(
      
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={this.props.item.imageS}
        resizeMethod='scale'
        style= {{height: 70, width: 120, margin: 5, }}
        />
        <View style={{width: this.state.W-120}} >
          <Text style={styles.listItemFonts}>{this.props.item.name}</Text>
          <Text>{this.props.item.desc}</Text>
        </View>
      </View>
    )
  }
}

export default class digSystem extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
      W: Dimensions.get('window').width,
      desc: false,
      ind: -1,
    })
    Dimensions.addEventListener('change', () => {
      this.setState({
      W: Dimensions.get('window').width
    })
    })
  }

  render() {
    if (this.state.desc) {
      return (
        <TabView
        data={DigSystemData[this.state.ind]}
        />
      )
    }
    
    return (

      <View style={[styles.container,{width: this.state.W}]}>        

        <FlatList style={[styles.list,{width: this.state.W,}]}
        data={DigSystemData}
        ref={'flist'}
        renderItem={({item,index})=>
        {
            return (
              <TouchableOpacity
              onPress={()=>{
              this.setState({desc: true})
              this.setState({ind: index})
              }}
              >
                <DigSystemComponent item={item} index={index} parentFlatList = {this} ></DigSystemComponent>
              </TouchableOpacity>
            )
        }}
        >
        </FlatList>
        <View style={{height: 100}} >
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    backgroundColor: 'white',
  },
  listItemFonts: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#535c68',
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
      margin: 3,
    },
});
