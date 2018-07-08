import React from 'react';
import { View,Text, StyleSheet,WebView , Dimensions,Image } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import QCard from './qCard'
import Quiz from './quiz'

var ind = require('../contents/AntiPro.html')
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
const FirstRoute = () => 
<View style={[ styles.container, { backgroundColor: 'white' } ]} >
<WebView
        source={ind}
        style={{flex: 1,}}
      />
</View>

const SecondRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} >
<QCard/>
</View>
const ThirdRoute = () => 
<View style={[ styles.container, { backgroundColor: 'white' } ]} >
<Quiz/>
</View>
;

export default class tabView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Details' },
      { key: 'second', title: 'QCard' },
      { key: 'third', title: 'Quiz' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  render() {
    ind = this.props.data.details
    return (
    <View style ={{flex:1}} >
    <View style = {{backgroundColor: '#0097e6',flexDirection: 'row',}} >
        <View  style={{padding:5}} >
        <Image
        source= {this.props.data.imageS}
        style={{marginVertical: 10}}
        />
        </View>
        <View style={{marginHorizontal:5,padding:20, }} >
          <Text style={{fontSize:20,fontWeight:'bold'}}>
            {this.props.data.name}
          </Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>
            {this.props.data.desc} 
          </Text>
        </View>
        
    </View>
    <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
    >
    </TabView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});