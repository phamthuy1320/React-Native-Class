import React,{useState,useMemo,useCallback} from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  ActivityIndicator,
  FlatList,
  Linking,
  RefreshControl
} from 'react-native';
import moment from 'moment';
import {Card, Button,Icon} from 'react-native-elements';

const filterForUniqueArticles = arr => {
  const cleaned = [];
  arr.forEach(itm => {
    let unique = true;
    cleaned.forEach(itm2 => {
      const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
      if (isEqual) unique = false;
    });
    if (unique) cleaned.push(itm);
  });
  return cleaned;
};


export default function App() {
  const [loading,setLoading]= useState(true);
  const [articles,setArticles]= useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasErrored, setHasApiError] = useState(false);
  const [lastPageReached, setLastPageReached] = useState(false);

  const onPress = url => {
    Linking.canOpenURL(url).then(supported => {
      if(supported){
        Linking.openURL(url);
      }
      else{
        console.log(`Don't know how to open URL:`,url);
      }
    })
  }

  
  const renderArticleItem = ({ item }) => {
    return (
      <Card title={item.title} image={{ uri: item.urlToImage }}>
        <View style={styles.row}>
          <Text style={styles.label}>Source</Text>
          <Text style={styles.info}>{item.source.name}</Text>
        </View>
        <Text style={{ marginBottom: 10 }}>{item.content}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Published</Text>
          <Text style={styles.info}>
            {moment(item.publishedAt).format('LLL')}{/*dinh dang thoi gian */}
          </Text>
        </View>
        <Button icon={<Icon />} onPress ={()=> {onPress(item?.url)}} title="Read more" backgroundColor="#03A9F4" />
      </Card>
    );
  };


  const getNews = async ()=>{
      if(lastPageReached){ return;}
      
      try{
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=abcaea57d4554c0fbc5f903521646862&page=${pageNumber}`);
        const jsonData = await response.json();
        const hasMoreArticles = jsonData.articles.length > 0;
      
        if (hasMoreArticles) {
          const newArticleList = filterForUniqueArticles(articles.concat(jsonData?.articles));
          setArticles(newArticleList);
          setPageNumber(pageNumber+1);
          console.log(`articles count page ${pageNumber}: `,jsonData.articles.length);
          console.log('page number: ',pageNumber);
        } else {
          console.log('last page');
          setLastPageReached(true);
        }
      }catch(error){
        setHasApiError(true);
        console.log('error',error);
      }
      setLoading(false);
    }
    const data = useMemo(()=>{getNews();},[pageNumber]);
  

 
if(loading){
  return(
    <View style={styles.container}>
      <ActivityIndicator size='large' loading={loading}/>
    </View>
  )
}

if(hasErrored){
  return(
    <View style={styles.container}>
      <Text> Error= Wrong API</Text>
    </View>
  )
}

return (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.label}>Articles Count:</Text>
      <Text style={styles.info}>{articles.length}</Text>
    </View>
   
    {articles.length>0?
      <FlatList
      data={articles}
      renderItem={renderArticleItem}
      keyExtractor={item => item.title}
      onEndReached={data}
      onEndReachedThreshold={1}
      ListFooterComponent={lastPageReached?<Text style={styles.label}>No more articles</Text>:<ActivityIndicator size='large' loading={loading}/>}
    />:
    <Text style={styles.label}>Now dont have any articles</Text>  
  }
    
  </View>
);
}
  
const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  }
});
