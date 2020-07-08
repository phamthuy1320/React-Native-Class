import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
      {<View style={styles.headContainer}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={{
            flex: 1,
            width: '100%',
            height: 10,
            

          }}
          resizeMode="contain"
        />
        <Feather name="inbox" size={27} color="black" />
      </View>}
     
      <View style= {styles.bodyContainer}>

       <View>
        <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
        </View> 
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>

    //<Image source= require('')>-> cho anhr local 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: '',
  },
  headContainer:{
    width: '100%',
    height: 50,
    backgroundColor:'#f2f6fa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyContainer:{

  }

});
