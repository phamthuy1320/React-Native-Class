import { 
  StyleSheet, 
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
  ScrollView, 
  TouchableOpacity,
 Button} from 'react-native';
 import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';


const imgData = [
  {id:1,imgSource:require('./assets/image/1.jpg')},
  {id:2,imgSource:require('./assets/image/2.jpg')},
  {id:3,imgSource:require('./assets/image/3.jpg')},
  {id:4,imgSource:require('./assets/image/4.jpg')},
  {id:5,imgSource:require('./assets/image/5.jpg')},
  {id:6,imgSource:require('./assets/image/6.jpg')},
  {id:7,imgSource:require('./assets/image/7.jpg')},
];

const profile ={
  name:'Sieu Thai',
  avatar:require('./assets/avatar/1.jpg'),
  job:'Developer',
  followers:'15k',
  following:'605',
  photos:imgData.length
};

const centerImgData = Math.round(imgData.length /2);

const ListItem=(props)=>{
  return(
    <View style={[styles.row,{marginVertical:0}]}>
    {/*column 1*/}
      <Image
        style={styles.item}
        source={props.item.imgSource}
      />
      {
        //If index of image in column 2 <length then continue display column 2
        (centerImgData+imgData.indexOf(props.item)<imgData.length)? <Image
        style={styles.item}
        source={imgData[centerImgData+imgData.indexOf(props.item)].imgSource}
      />:<Image style={styles.item}/>
      }
    </View>
  )
}

const Album =(props)=>{
  return(
  <FlatList
      data={props.list.slice(0,centerImgData)}
      renderItem={({item}) => (
        <ListItem
          item={item}
        />
      )}
      ItemSeparatorComponent={()=>(<View style= {{margin:5}}/>)}
      keyExtractor={item => item.id.toString()}
   />
	)
}
export default function App(){
  return(
    //Information
    <SafeAreaView style={styles.container}>
		<View style={styles.header}>
		  <View style={styles.navigator}>
			<Ionicons name='ios-arrow-back' size={27} color='black' onPress={()=>alert('Back')}/>
			<Feather name='menu' size={27} color='black' onPress={()=>alert('Menu')}/>
		  </View>
		  <View style={styles.profile}>
			<Image style={styles.avatar} source={profile.avatar}/>
			<View style={styles.general}>
			  <View>
			  <Text style={[styles.primary,{textAlign:'left'}]}>{profile.name}</Text>
			  <Text style={[styles.secondary,{textAlign:'left'}]}>{profile.job}</Text> 
			  </View>
			  <View style={styles.row}>
			  <TouchableOpacity style={styles.button} onPress={()=>alert('follow')   } >
			  <Text style={styles.label}>Follow</Text>
			  </TouchableOpacity>
			  <TouchableOpacity style={[styles.button,{backgroundColor:'#78d5fa'}]} onPress={()=>alert('message')   } >
			  <Feather name='send' style={styles.label}/>
			  </TouchableOpacity>
			</View>
			</View>
		  </View>
		  
		  <View style={styles.row}>
			<View style={{flex:1}}>
			  <Text style={styles.primary}>{profile.photos}</Text>
			  <Text style={styles.secondary}>Photos</Text>
			</View>
			<View style={{flex:1}}>
				<Text style={styles.primary}>{profile.followers}</Text>
				<Text style={styles.secondary}>Followers</Text>
			  </View>
			<View style={{flex:1}}>
			  <Text style={styles.primary}>{profile.following}</Text>
			  <Text style={styles.secondary}>Following</Text>
			</View>
		  </View>
		</View>
    
		<Album list={imgData}/>   
	  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{

  },
  navigator:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5
  },
  header:{
    marginBottom:20
  },
  profile:{
    flexDirection:'row'
  },
  avatar:{
    height:80,
    width:80,
    borderRadius:50,
    margin:10
  },
  general:{
    flexDirection:'column'
  },
  item:{
    width:200,
    height:100,
    flex:1,
    marginHorizontal:5,
    borderRadius:10,
    resizeMode:'cover'
  },
  primary:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  secondary:{
    textAlign:'center',
    fontSize:16,
    marginVertical:5
  },
  row:{
    flexDirection:'row',
    marginVertical:10
  },
  button:{
    backgroundColor:'#4771f6',
    marginRight:5,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:5,
    paddingHorizontal:20,
    borderRadius:25
  },
  label:{
    color:'#ffffff',
    fontWeight:'bold',
    fontSize:14
  }

}) 