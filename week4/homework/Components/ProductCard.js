import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function ProductCard(props){
    return(
      <View style={{
          flex:1,
          flexDirection:'row',
          borderWidth:1,
          borderRadius:10,
          borderColor:'#fff',
          backgroundColor:'#fff',
          padding:15,
          margin:10
      }}>
          <Image 
            source={{uri:props.production_image}}
            style = {{
            height:60,
            aspectRatio:1/1,
            borderRadius:50
            }}
            />

            <View style={{
                margin:5
            }}>
                <Text style={{
                    fontSize:18
                }}>You bought {props.production_name} for ${props.spend_money}</Text>
                <Text style={{
                    color:'#A6B1C0',
                    
                }}
                >{props.date_time}</Text>
            </View>

      </View>
    )
  }

  const styles= StyleSheet.create({
    
  })