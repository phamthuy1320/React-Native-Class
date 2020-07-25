import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

export default function Record(props){
    return(
      <TouchableOpacity style={styles.overview} onPress={props.onPress}>
       <View style = {[styles.category_icon,{backgroundColor:props.color}]}>
        <Image 
            source={props.url}
            style = {{
            height:30,
            aspectRatio:1/1,
          }}
          />
       </View>
        
      <View style={{flex:1,alignItems:'center', flexDirection:'row', alignContent:'space-between'}}>
        <View style={{flex:1,}}> 
          <Text style={{fontSize:20}}>{props.category}</Text>
          <Text style={{color:'#A6B1C0'}}>{props.account}</Text>
        </View>
        <View style={{paddingRight:10}}>
          <Text style={{color:'#A6B1C0',alignSelf:'flex-end'}}>{props.date}</Text>
          <Text style={{color:props.color_amount,alignSelf:'flex-end'}}>{props.amount}</Text>
        </View>
      </View>
  
      </TouchableOpacity>
    )
  }

  const styles= StyleSheet.create({
    overview:{
        flex:1,
        flexDirection:'row',
        margin:10,
        marginLeft:20,
        borderWidth:1,
        paddingVertical:5,
        borderRadius:10,
        backgroundColor:'#fff',
        borderColor:'#fff'
      
      },
      category_icon:{
        height:'100%',
        width:60,
        aspectRatio:1/1,
        resizeMode:'contain',
        borderRadius:10,
        position:'relative',
        right: 10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
      }
  })