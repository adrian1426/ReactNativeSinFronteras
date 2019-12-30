import React from 'react';
import {View, StyleSheet,Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {

render(){
  return(
    <View style={estilos.container}>
      <MapView
        style={estilos.mapStyle}
        initialRegion={{
          latitude:-33.460064,
          longitude: -70.652163,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09
        }}
      />
    </View>
  )
}
}

const estilos = StyleSheet.create({
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