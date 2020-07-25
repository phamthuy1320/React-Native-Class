import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function ModalContent(){
    const route = useRoute();
    return(
        <View style = {{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text style={{fontSize:20,margin:10}}>Notifications</Text>
            <TouchableOpacity 
                onPress={route.params?.onPress}
                style={{
                    borderWidth:1,
                    borderColor:'#fff',
                    borderRadius:10,
                    backgroundColor:'#fff',
                    paddingVertical:10,
                    paddingHorizontal:50,
                    shadowColor: "#000",
                    elevation: 8,
                    
                    
                }}
            >
                <Image 
                    source={require('../Icons/close.png')} 
                    style={{
                        height:25,
                        aspectRatio:1/1
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}
