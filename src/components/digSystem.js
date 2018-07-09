import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight } from 'react-native';
import DigSystemData from '../data/digSystemData'
import DataList from './dataList'

export default class digSystem extends React.Component {
  constructor (props){
    super(props)
    this.state = ({})
  }

  render() {
    return (      
    <DataList items = {DigSystemData} />
    );
  }
}