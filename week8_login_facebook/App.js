import React,{useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AsyncStorage, AccessToken} from '@react-native-community/async-storage';

import Home from './screens/Home';
import Login from './screens/Login';


const Stack = createStackNavigator();

export default function App({navigation}){

    const [isLogined, setLogined] = useState(false);
  /*  useEffect(async ()=>{
      
     const token = await AsyncStorage.getItem('@token');
      if(token&&token!==''){
        navigation.navigate('Home');
      }
      else navigation.navigate('Login')

    })*/
    return (
       <NavigationContainer>
         <Stack.Navigator>
           {isLogined===false?
           <Stack.Screen name ='Login' component={Login}/>:
           <Stack.Screen name ='Home' component={Home}/>}
         </Stack.Navigator>
       </NavigationContainer>
    )
}