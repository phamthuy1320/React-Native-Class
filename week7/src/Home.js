import React,{useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';


export default function Home({navigation}){
    const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>

      <Text style={{
        marginLeft:10
      }}>Set UserName</Text>
      <TextInput style={styles.textInput} 
        onChangeText = {(text)=>setUsername(text)}
        value={username}
      />
      <TouchableOpacity 
        style={{
          marginHorizontal:10,
        }}
        onPress={()=>navigation.navigate('Chats',{user:username?username:'Chats'})}
      >
        <Text 
          style={{
            textAlign:'center',
            color:'blue',

          }}
        >Go to Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1
  },
  textInput:{
    borderWidth:1,
    height:50,
    marginHorizontal:10,
    alignContent:'center',
    marginVertical:10
  
  },
  labelButton:{

  },
  

})