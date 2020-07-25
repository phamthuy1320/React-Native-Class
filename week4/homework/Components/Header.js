import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

export default function Header(props){
    return(
      <View 
        style={{
            //flex:1,
            flexDirection:'row',
            //justifyContent:'space-between',
            //alignContent:'center',
           // alignItems:'center',
           // width:'100%',
            //padding:15,
           // marginTop:20,
            backgroundColor:(props.backgroundColor==null)?'#F2F4F7':props.backgroundColor
            }}>
              {(props.iconLeft==null)?<View style={{flex:0.5}}/>:
        <TouchableOpacity onPress={props.onPressLeft} style={{flex:1}}>
          <Image source={props.iconLeft} style={{height:28,width:28}}/>
        </TouchableOpacity>}
        <Text style={{
            flex:9,
            fontSize:28,
            textAlign:'center',
            color:(props.colorTitle==null)?'gray':props.colorTitle,
          }}>
          {(props.title==null)?'Header':props.title.charAt(0).toUpperCase() + props.title.slice(1)}
        </Text>
        {(props.iconRight==null)?<View style={{flex:0.5}}/>:<TouchableOpacity onPress={props.onPressRight} style={{flex:0.5}}>
          <Image source={props.iconRight} style={{height:28,width:28}}/>
        </TouchableOpacity>}
        
      </View>
    )
  }