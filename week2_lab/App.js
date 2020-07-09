import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList,Alert } from 'react-native';

import { Feather, AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.headContainer}>
        <Image
          source={{
            uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={styles.headImage}
          resizeMode="contain"
        />
        <Feather name="inbox" size={30} color="black" />
      </View>
     
      <View style= {styles.bodyContainer}>
          <FlatList
          data={feedData}
          renderItem={({item}) => (
            <FeedItem
            feed={item}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
       
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const feedData =[
  {
    id:1,
    name:'Anna',
    image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg',
    avatar:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg',
    likeCount:100
  },
  {
    id:2,
    name:'Hanna',
    image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg',
    avatar:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg',
    likeCount:120
  },
  {
    id:3,
    name:'Kanna',
    image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg',
    avatar:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg',
    likeCount:150
  },
];

const FeedItem=(props)=>{
  return(
    <View style={styles.feedItem} key={props.feed.id}>
     <View style={styles.avatarWrapper}>
       <Image 
        source={{uri:props.feed.avatar}}
        style={styles.avatarImage}
        resizeMode="cover"
      />
      <Text style={styles.posterName}>{props.feed.name}</Text>
     
     </View>
     <View style={styles.imageWrapper}>
     <Image 
        source={{uri:props.feed.image}}
        style={styles.imagePoster}
        resizeMode="cover"
      />
     </View>
     <View style={styles.interactive}>
       <Feather name='heart' size={27} color='black' onPress={()=>alert('Liked')}/>
       <Feather name='message-square' size={27} color='black' onPress={()=>alert('Comment')}/>
       <Feather name='share' size={27} color='black' onPress={()=>alert('Shared')}/>
     </View>
     <View style={styles.likeCount}>
     <AntDesign name='heart' size={27} color='black'/>
      <Text style={{marginLeft:20,fontSize:15}}>{props.feed.likeCount} likes</Text>
     </View>
  
  </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headContainer:{
    height: 100,
    backgroundColor:'#f2f6fa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal:10,
    paddingTop:20
  },
  headImage:{
    flex: 1,
    width: '100%',
    height: 70,
  },
  bodyContainer:{
    width:'100%',
  },
  feedItem:{
    marginHorizontal:20
  },
  avatarWrapper:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginVertical:7,
    marginHorizontal:10
  },
  avatarImage:{
    width: 46,
    height: 46,
    borderRadius:25
  },
  posterName:{
    marginLeft:12,
    fontSize:15,
    fontWeight:'500'
  },
  imageWrapper:{
   height:300,
  },
  imagePoster:{
   flex:1,
  },
  interactive:{
    flex:1,
    flexDirection:'row',
    marginVertical:7,
    marginHorizontal:12,
    width:'25%',
    justifyContent:'space-between'
  },
  likeCount:{
    flex:1,
    flexDirection:'row',
    marginVertical:7,
    marginHorizontal:12,
  }
});
