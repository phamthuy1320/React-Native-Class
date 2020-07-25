import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';//*Note:Have in all files ? */

import Dashboard from './Screens/DashboardScreen';
import Profile from './Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen(){
    return (
      <NavigationContainer>
        <Tab.Navigator
           tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle:{fontSize:20}
          }}
        >
          <Tab.Screen 
            name='Dashboard' 
            component={Dashboard}
           
            />
          <Tab.Screen 
            name='Profile' 
            component={Profile}
           
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
  
  
}