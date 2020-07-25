import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView,FlatList, SafeAreaView,Image,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';//for hook

import Card from '../Components/Card';
import Record from '../Components/Record';
import Detail,{HeaderDetail} from './DetailScreen';
import Header from '../Components/Header';
import ModalContent from './ModalScreen';

const DATAJSON = require('../Data/data.json'); 
const CATEGORYS = [
 {category: 'Groceries',url:require('../Icons/Group253.png'),color:'#FEC180', account:'Credit card', date: 'Today',amount:'$250.00',color_amount:'#FF958F'},
 {category: 'Clothes',url:require('../Icons/Path987.png'),color:'#EFBAD3', account:'Credit card', date: '03/04/2018',amount:'$100.00',color_amount:'#A254F2'},
 {category: 'Rental',url:require('../Icons/Path986.png'),color:'#54BAE6', account:'Credit card', date: '01/03/2018',amount:'$500.00',color_amount:'#51EFDE'},
 ]


const RecordList = () =>{
  const navigation = useNavigation();//for hook
  return(
    
      <FlatList
      data = {CATEGORYS}
      renderItem={({item})=>
        {return(<Record 
          key={item.category}
          url={item.url}
          color={item.color}
          category={item.category}
          account={item.account}
          date={item.date}
          amount={item.amount}
          color_amount={item.color_amount}
          onPress={()=>{navigation.navigate('Detail',{category:item.category})}}
        />)}
      }
     
      keyExtractor={(item) => item.category}
    />
  
)
}


const DashboardContent = () =>{

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.account_information}>
        <Text style={{fontSize:20}}>List of Account</Text>
          <View style={styles.account}>
            <Card color='#E437BC' 
            name='Bank account'
            total={DATAJSON.account_information.bank.total}/>
            <Card color="#EFA75A" 
            name='Credit card'
            total={DATAJSON.account_information.credit.total}/>
            <Card color='#23E3D6' 
            name='Cash'
            total={DATAJSON.account_information.cash.total}/>
          </View>
  
          <View style={styles.total}>
            <View style={styles.card}>
              <Text style={[{color:'#FF958F', fontSize:30}]}>$ {DATAJSON.account_information.total}.00</Text>
              <Text style={{color:'#A6B1C0',fontSize:20}}>Total Balance</Text>
            </View>
          </View>
        </View>
          
  
        <Text style={{fontSize:20,marginVertical:10,margin:10}}>Last Records Overview</Text>
  
        <RecordList/>
       
       
      </SafeAreaView>
      
    );
  
}

const Stack = createStackNavigator();

export default function Dashboard({ navigation }){ 
    return(
      <Stack.Navigator>
         
       <Stack.Screen 
          name = 'DashboardContent' 
          component = {DashboardContent}
          options={{
            headerTitle: () =>
            <Header
            iconLeft={require('../Icons/Group256.png')}
            title= 'Dashboard'
            iconRight={require('../Icons/Group255.png')}
            onPressRight={()=>navigation.navigate('ModalContent',{onPress:()=>navigation.navigate('DashboardContent')})}
          />
            ,
            headerStyle:{
              backgroundColor:'#F2F4F7'
              }
              }}   
          />
        
        <Stack.Screen 
          name = 'ModalContent'
          component={ModalContent}
          options={{
            headerTitle: '',
            headerStyle:{height:0},
            headerLeft:''
          }}
        />

        <Stack.Screen
        name='Detail'
        component={Detail}
        options={{
          headerTitle: () =>
            <HeaderDetail/>
          ,
          headerStyle:{
            backgroundColor:'#F2F4F7'
            },
          headerLeft:() =>
          <TouchableOpacity style={{marginLeft:10}} onPress={()=>navigation.navigate('DashboardContent')}>
              <Image source={require('../Icons/back.png')} style={{height:28,width:28}}/>
          </TouchableOpacity>
          }
          }

          />
         
      </Stack.Navigator>
     
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F4F7',
  },
 
  account_information:{
    margin:10
  },
  card:{
    marginVertical:10,
    borderWidth:1,
    padding:10,
    borderRadius:10,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    borderColor:'#fff',
    width:'100%',
    backgroundColor:'#fff'
},
  account:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  records:{
    margin:10
  },
});
