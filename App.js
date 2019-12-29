import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default class App extends React.Component {

  state={
    location: {coords:{}},
    errorMessage: null
  }

  getLocation = async () =>{
    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status!== "granted"){
      return this.setState({errorMessage:'Permisos denegados'});
    }

    const location= await Location.getCurrentPositionAsync();
    this.setState({location});
  }

render(){
  const {location} = this.state;
  return(
    <View style={estilos.container}>
      <Text>
        {`latitud: ${location.coords.latitude}`}
        {` longitud: ${location.coords.longitude}`}
      </Text>
      <Button title="solicitar permiso" onPress={this.getLocation}/>
    </View>
  );
}
}

const estilos = StyleSheet.create({
  container:{
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});