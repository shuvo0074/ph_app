import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight,ScrollView } from 'react-native';
import React from 'react';
import SearchBar from 'react-native-searchbar';
import ProductData from '../data/productData'
import DataList from './dataList'

export default class help extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      W: Dimensions.get('window').width,
      ProductData,
      results: [],
    }
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
    console.log("**"+typeof(ProductData))
    console.log("--"+typeof(this.state.results))
    return (
        <View style={{padding: 10, marginTop: 25}} >
        <View style={{ marginTop: 110}}>
          {
            this.state.results.map((result, i) => {
              return (
                <TouchableOpacity>
                  <Text key={i}>
                  {result.name} : 
                  {result.desc}
                </Text>
                </TouchableOpacity>
              );
            })  
          }
          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <View style={{ backgroundColor: 'green', height: 100, marginTop: 50 }}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.searchBar.hide()}>
            <View style={{ backgroundColor: 'red', height: 100 }}/>
          </TouchableOpacity>
        </View>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={ProductData}
          handleResults={this._handleResults}
          showOnLoad
          allDataOnEmptySearch
        />
        </View>
    );
  }
}

