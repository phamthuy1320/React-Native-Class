import React,{useState, useEffect,useMemo} from 'react';
import {View,Text,Button,FlatList, TextInput, TouchableOpacity} from 'react-native';
import {GiftedChat, InputToolbar,Actions, Composer, Send} from 'react-native-gifted-chat';
//import {useRoute,useNavigation} from '@react-navigation/native';
import database from './services/Fire';
import Icon from 'react-native-vector-icons/Feather';
//import { database } from 'firebase';

const initialMessage =require('./constansts/messages.json');
/*const getData = () =>{
  database.ref('Users/').once('value', function (snapshot) {
    console.log(snapshot.val());
  });
}*/

const Header = (props)=>{
  return(
    <View style={{height:50, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10}}>
      <Icon name ='arrow-left' size = {30} onPress = {()=>props.navigation.goBack()}/>
      <Text style={{ textAlign:'center', fontSize:30}}>{props.title}</Text>
      <View/>
    </View>
  )
}

export default function Chats({route,navigation}){  
  const [input,setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [val, setVal] = useState([])

  const putMessages = () =>{
    return(
      database.ref().push(input)
    ).then((data)=>{
      console.log('data',data)
    })
  }

  useMemo(
  ()=>{database.ref().once('value')
  .then(async(snapshot) => {
     // console.log(snapshot.val());
      setVal([snapshot.val()]);
      console.log('val', val.length)
     await setMessages(val)
     console.log('mess',messages.length)
      })},[])
  
  return (
    <View style={{flex:1}}>
      
      <Header title = {route.params.user} navigation={navigation}/>
      {messages.length>0?messages[0].map((item)=><Text>{item.text}</Text>):<Text>no</Text>}
      <GiftedChat
        messages={messages[0]}
        text={input}
        onInputTextChanged={(value)=>setInput(value)}
       
      />
      <TouchableOpacity onPress = {()=>{
        putMessages;
        const mess = [...messages[0],{input}];
        console.log(mess);
      }}>

        <Text>Send</Text>
      </TouchableOpacity>
      {/*<TextInput
        style={{
          borderTopWidth:1,
          borderColor:'#f8f8f8',
          height:50,
          
        }}
        placeholder='Type a message'
        onChangeText={(value)=>setInput(value)}
        value={input}
      />*/}
    </View>
  )
}