import React from 'react';
import { View,Text, StyleSheet,Image,FlatList,ScrollView,TouchableOpacity, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import QuizData from '../data/quizData'
console.disableYellowBox = true

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
}

let arr=[]
var arr2=[]
export default class quizComponent extends React.Component {
  
  constructor (props){
    super(props)
    this.state = ({
      quizIndex: 0,
      selected: [],
      checked: null,
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
      arr=this.state.selected
      arr2=QuizData[this.state.quizIndex].answer.split("~~")
      return (
        <View style ={{flex:1,paddingHorizontal: 20, justifyContent: 'flex-end', backgroundColor: 'white',}} >
        <View style={{backgroundColor: '#bdc3c7', margin : 2, padding: 10,}} >
          <Text style={{fontWeight: 'bold'}} >
            Question {this.state.quizIndex+1} of {QuizData.length}
          </Text>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 18}} >
          {QuizData[this.state.quizIndex].question} 
        </Text>

        <ScrollView style={{height: this.state.H/2 }} >
        {
          arr2.map((item,index)=>{
            return(
              <View style={{marginBottom:2}} >
                {
                  
                  this.state.selected[this.state.quizIndex]==index ?
                <TouchableOpacity
                style={{ flexDirection: 'row',padding: 3}}
                
                >
                  <Image 
                  source={require('../contents/quizSelected.png')} 
                  style= {{height: 20, width: 20,margin: 3}}
                  />
                  <Text style={{fontWeight: 'bold', fontSize: 20}} key = {index} >  {item}
                  </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
              style={{ flexDirection: 'row'}}
              onPress={()=>{
                arr[this.state.quizIndex]=index
                this.setState({selected: arr})
                this.setState({checked: index})
              }}
              >
                <Image 
                source={require('../contents/quizNotSelected.png')} 
                style= {{height: 20, width: 20,margin: 3 }}
                />
                <Text style={{fontWeight: 'bold', fontSize: 20}} key = {index} >  {item}
                </Text>
              </TouchableOpacity>
                }
              </View>
            )
          })
        }
        </ScrollView>

        {
          this.state.selected[this.state.quizIndex]==null?
          <View/>
          :
            this.state.selected[this.state.quizIndex]==QuizData[this.state.quizIndex].ca ?
            <View style={{backgroundColor: "green",padding:10}}>
              <Text>
                The answer is correct.
              </Text>
            </View>
            :
            <View>
              <View style={{margin:10,backgroundColor: "#e74c3c",padding:10}} >
              <Text>
                The answer is not correct.
              </Text>
              </View>
              <View style={{margin:10,backgroundColor: "#9b59b6",padding:10}}>
              <Text>
                Correct answer is: {arr2[QuizData[this.state.quizIndex].ca]}
              </Text>
              </View>
            </View>
        }

        {
          QuizData[this.state.quizIndex+1]==null?
          <View style={styles.buttonContainer} >
        <TouchableOpacity 
        style= {[styles.buttonStyle,{ width: ((this.state.W/2) - 20) }]}
        onPress= {()=>{
          this.setState({quizIndex: this.state.quizIndex-1})
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
            this.state.quizIndex==0?
            <View style={styles.buttonContainer} >
            <TouchableOpacity 
            style= {[styles.buttonStyle,{marginLeft:((this.state.W/2)), width: ((this.state.W/2) - 20) }]}
            onPress= {()=>{
            this.setState({quizIndex: this.state.quizIndex+1})
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
              this.setState({quizIndex: this.state.quizIndex-1})
            }} >
            <Text>
            Previous
            </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {[styles.buttonStyle,{width: ((this.state.W/2) - 20) }]}
            onPress= {()=>{
            this.setState({quizIndex: this.state.quizIndex+1})
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
  buttonContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical:7, 
    justifyContent: 'center'
  },
});