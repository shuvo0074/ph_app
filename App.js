import React, { Component } from 'react';
import {Router,Scene,Actions} from 'react-native-router-flux'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import Home from './src/components/home'
import Products from './src/components/products'
import DigSystem from './src/components/digSystem'
import Quiz from './src/components/quiz'
import Contact from './src/components/contact'
import About from './src/components/about'
import Help from './src/components/help'
import HumanBodyparts from './src/components/humanBodyparts'
import Talk from './src/components/talk'
import CircSystem from './src/components/circSystem'
import MuscularSys from './src/components/muscularSys'
import NervousSys from './src/components/nervousSys'
import RespiratorySys from './src/components/respiratorySys'
import UrinarySys from './src/components/urinarySys'

export default class App extends Component<{}> {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
      <Scene key="root" hideNavBar={false}  >
      
      <Scene
      key="home"
      component={Home}
      title="Home"
      initial
      hideNavBar={false}
      />

      <Scene
      key="talk"
      component={Talk}
      title="Model little talk"
      />

      <Scene
      key="products"
      component={Products}
      title="Products"
      />
      
      <Scene
      key="humanBodyparts"
      component={HumanBodyparts}
      title="Human Body parts"
      />

      <Scene
      key="circSystem"
      component={CircSystem}
      title="Circulatory System"
      />

      <Scene
      key="muscularSys"
      component={MuscularSys}
      title="Muscular System"
      />

      <Scene
      key="nervousSys"
      component={NervousSys}
      title="Nervous System"
      />

      <Scene
      key="respiratorySys"
      component={RespiratorySys}
      title="Respiratory System"
      />

      <Scene
      key="urinarySys"
      component={UrinarySys}
      title="Urinary System"
      />

      <Scene
      key="digSystem"
      component={DigSystem}
      title="Digestive system"
      />
      
      <Scene
      key="quiz"
      component={Quiz}
      title="quiz"
      />
      
      <Scene
      key="contact"
      component={Contact}
      title="contact"
      />

      <Scene
      key="about"
      component={About}
      title="about"
      />

      <Scene
      key="help"
      component={Help}
      title="help"
      />

      </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    backgroundColor: 'red',
    height: 50
  }
});
