import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';
import {TouchableOpacity} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      currentCurrency:'đ 0.00 VND',
      convertCurrency:'$ 0.00 USD',
      fromVND:true
    };
  }

  _convert = (value) =>
    {
      var tempValue;
      if(value===''){tempValue=0}
      else tempValue=value
     
      this.setState({
        inputValue:tempValue
      })
      if(this.state.fromVND===true){this.setState({
      currentCurrency: 'đ '+ tempValue + ' VND',
      convertCurrency:'$ '+(tempValue/23000)+' USD',
    })}
      else{this.setState({
        currentCurrency: '$ '+ tempValue + ' USD',
        convertCurrency:'đ '+(tempValue*23000)+' VND',
      })}
    }

  _onPressConvertToUSD = () =>
  {
   if(this.state.fromVND===false){
     this.setState({
       fromVND:true
     })
   }
    this._convert(this.state.inputValue)
  }

  _onPressConvertToVND = () =>
  {
   if(this.state.fromVND===true){
     this.setState({
       fromVND:false
     })
   }
    this._convert(this.state.inputValue)
  }

  render(){
    
    return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Please enter the value of the currency you want to convert
      </Text>
      <TextInput style={styles.input} 
      onChangeText = {(value)=> this._convert(value)}/>
      
     {<View style={styles.convertButton}>
        <TouchableOpacity style={[styles.convert,{backgroundColor:(this.state.fromVND===true)?'lightblue':'#ffffff'}]}
         onPress = {this._onPressConvertToUSD}>
        <Text>VND to USD</Text>
        
      </TouchableOpacity>

      <TouchableOpacity  style={[styles.convert,{backgroundColor:(this.state.fromVND===false)?'lightblue':'#ffffff'}]}
       onPress = {this._onPressConvertToVND}>
        <Text>USD to VND</Text>
      </TouchableOpacity>
      </View>}

     {
        <View style={styles.displayConvert}>
          <View >
            <Text style={styles.display}>CurrentCurrency</Text>
            <Text style={styles.displayCurrency}>
            {this.state.currentCurrency}</Text>
          </View>

          <View >
            <Text style={styles.dispay}>Convertion currency</Text>
            <Text style={styles.displayCurrency}>{this.state.convertCurrency}</Text>
          </View>
        </View>
      }

    </View>)
  }
      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    alignContent:'center',
    alignItems:'center',
  },
  paragraph: {
    fontSize: 18,
  },
  input: {
    height:40,
    borderWidth:1,
    textAlign:'center',
    fontSize:24
  },
  convertButton:{
    marginVertical:5
  },
  convert:{
    borderWidth:1,
    height:40,
    borderRadius:25,
    paddingHorizontal:20,
    marginVertical:5,
    justifyContent:'center',
    alignItems:'center'
    
  },
  displayConvert:{
   
  },
  display:{
   textAlign:'center',
   justifyContent:'center',
    alignItems:'center'
  },
  displayCurrency:{
    fontSize:24,
    color:'green',
    fontWeight:'bold',
    textAlign:'center'
  }
});
