import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import Map from './src/components/Map';



export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
 
  

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      );
    } else {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }
  });

  
  let text = 'waiting';
  let LatLng = {
    latitude: 21.020019254261747 ,
    longitude: 105.7911284,
  }
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(parseFloat(location.coords.altitude));
    LatLng = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
  }

  
  
  
  return (
    <View style={styles.container}>
      {<Map
        LatLng = {LatLng}
        coordinate = {LatLng}
        title = 'My place'
        description = 'my home'
        onPress = {()=>alert('home')}
      />}
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
