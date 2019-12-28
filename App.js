import React from 'react';
import {View,StyleSheet, Button, Alert} from 'react-native';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
});

export default class App extends React.Component {

  handlePress = () =>{
    Alert.alert('titulo','texto contenido',[
      {text:'boton 1', onPress: () => Alert.alert('presionaste 1')},
      {text:'boton 2', onPress: () => Alert.alert('presionaste 2')}
    ]);
  }
render(){
  return(
    <View style={styles.container}>
      <Button 
        title="click"
        onPress={this.handlePress}
      />
    </View>
  );
}
}