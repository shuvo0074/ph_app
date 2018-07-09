import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight } from 'react-native';
import ProductData from '../data/productData'
import DataList from './dataList'

export default class products extends React.Component {
  constructor (props){
    super(props)
    this.state = ({})
  }

  render() {
    return (
      <DataList items = {ProductData} />
    );
  }
}