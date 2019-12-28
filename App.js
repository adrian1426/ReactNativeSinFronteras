import React from 'react';
import {View, StyleSheet, Button, AsyncStorage, Alert} from 'react-native';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  fondo:{
    backgroundColor:'#bac7a7'
  }
});

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.getDatos();
  }

  getDatos = async () =>{
    const dato = await AsyncStorage.getItem('dato');
    Alert.alert('Dato! ',dato);
  }

  handlePress = async () =>{
    await AsyncStorage.setItem('dato','valor dato');
  }

render(){
  return(
    <View style={[styles.container,styles.fondo]}>
      <Button 
        title="Asignar valor" 
        onPress={this.handlePress}
      />
    </View>
  );
}
}