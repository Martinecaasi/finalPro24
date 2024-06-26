import React, { useEffect,useState } from 'react';
import { View,StyleSheet, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';


export default function map() {
const [currentLocation, setCurrentLocation] = useState<any>({});
const [errorMsg, setErrorMsg] = useState<any>('');

useEffect(() => {
          (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
          }
          let location = await Location.getCurrentPositionAsync({});
setCurrentLocation(location);
})();
console.log(currentLocation)
}, []);

let text = 'Pending approval...';
if (errorMsg) {
text = errorMsg;
} else if (currentLocation) {
text = JSON.stringify(currentLocation);
}

          

  return (
  <SafeAreaView>
<MapView style={styles.map} showsUserLocation={true} 
          region={{ latitude: currentLocation.latitude, 
                    longitude: currentLocation.longitude, 
                    latitudeDelta: 0.0008, 
                    longitudeDelta: 0.0011 }} />
  </SafeAreaView>
  )
}

const styles=StyleSheet.create({
          map:{

          },
})




