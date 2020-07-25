import React from 'react';
import {View,FlatList,StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';

import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';

const DATAJSON = require('../Data/data.json'); 

const data = () => dataEachCat(parseInt(1));

const RecordList = (props) =>{
    return(
          <FlatList
          data = {props.category}
          renderItem={({item})=>
            {return(
              <ProductCard
                production_image={item.production_image}
                production_name={item.production_name}
                spend_money={item.spend_money}
                date_time={item.date_time}
              />
            )}
          }
          keyExtractor={(item) => item.production_name}
        />
    )
  }

export function  HeaderDetail(){
  const route=useRoute();
  return(
    <Header title={route.params?.category}/>
)
}

const Groceries =DATAJSON.detail.filter(function(item){ return(item.category===1)})
const Clothes =DATAJSON.detail.filter(function(item){ return(item.category===2)})
const Rental =DATAJSON.detail.filter(function(item){ return(item.category===3)}) 

export default function Detail(){
    const route=useRoute();
    if(route.params?.category==='Groceries')
   { return(
      <RecordList category={Groceries}/>
    )}
    else
   { if(route.params?.category==='Clothes'){return(
      <RecordList category={Clothes}/>
    )}
    else
   { return(
      <RecordList category={Rental}/>
    )}
   }
}

const styles=StyleSheet.create({
  records:{
    margin:10
  },
})