import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Complete from './CompleteScreen';
import All from './AllScreen';
import Active from './ActiveScreen';

const Tab = createBottomTabNavigator();
export default function Home(){
    const state =useState();
    return(
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    labelStyle:{fontSize:20,marginBottom:10},
                }}
                
                initialRouteName = 'All'
            >
                <Tab.Screen name='Complete' component={Complete}/>
                <Tab.Screen name='All' component={All} />
                <Tab.Screen name='Active' component={Active} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
