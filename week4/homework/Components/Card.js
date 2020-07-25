import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default function Card(props){
    return (
      <View style={[styles.card,{backgroundColor:props.color}]}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={[styles.text,{fontSize:20}]}>$ {props.total}.00</Text>
      </View>
    )
  }

const styles= StyleSheet.create({
    card:{
        marginVertical:10,
        borderWidth:1,
        padding:10,
        borderRadius:10,
        backgroundColor:'#EFA75A',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        width:'32%',
        borderColor:'#fff'
    },
    text:{
        fontWeight:'bold',
        color:'#fff'
    },
      
})