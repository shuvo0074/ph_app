import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight } from 'react-native';
import { Actions} from 'react-native-router-flux'
import QCard from './qCard'
import TabView from './tabView'
import SearchBar from 'react-native-searchbar';

class ProductsComponent extends React.Component {
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
        <View  style={{height: 50, width: 95,alignItems: 'center',justifyContent: 'center' }} >
        <Image 
        source={this.props.item.imageS}
        style= {{ margin: 5, }}
        />
        </View>
        <View style={{width: this.state.W-120}} >
          <Text style={styles.listItemFonts}>{this.props.item.name}</Text>
          <Text>{this.props.item.desc}</Text>
        </View>
      </View>
    )
  }
}

export default class dataList extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
      W: Dimensions.get('window').width,
      desc: false,
      ind: -1,
      results: this.props.items,
    })
    this._handleResults = this._handleResults.bind(this);
    Dimensions.addEventListener('change', () => {
      this.setState({
      W: Dimensions.get('window').width
    })
    })
  }

  _handleResults(results) {
    this.setState({ results });
  }

  render() {
    if (this.state.desc) {
      return (
        <TabView
        data={this.state.results[this.state.ind]}
        />
      )
    }
    
    return (

      <View style={[styles.container,{width: this.state.W}]}>        
        
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={this.props.items}
          handleResults={this._handleResults}
          showOnLoad
          allDataOnEmptySearch
          onHide={()=>{
            this.setState({results: this.props.items})
          }}
        />

        <FlatList style={[styles.list,{width: this.state.W,}]}
        data={this.state.results}
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
                <ProductsComponent item={item} index={index} parentFlatList = {this} key= {index}></ProductsComponent>
              </TouchableOpacity>
            )
        }}
        >
        </FlatList>
        <View style={{height: 20}} >
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
    marginTop: 61
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
      height: 90,
      alignItems: 'center'    },
});
