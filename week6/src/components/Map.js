import React from 'react';
import MapView,{Marker,Callout} from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions} from 'react-native';



const Map = (props) => {
    return (
        <View style={styles.container} >
            <MapView style={styles.mapStyle}
              initialRegion = {{
                latitude: props.LatLng.latitude ,
                longitude: props.LatLng.latitude,
              }}
              //onRegionChange = {props.onRegionChange}
            >
              
              <Marker
                coordinate = {props.coordinate}
                title = {props.title}
                description = {props.description}
              >
                <Callout onPress = {props.onPress} />
              </Marker>
             
            </MapView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

  export default Map;