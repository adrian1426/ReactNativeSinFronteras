import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Texto extends React.Component{
  
  state={
    titulo:"hola chicos"
  }

  handlePress = () =>{
    this.setState({
      titulo:'hola amigos!!!.'
    });
  }

  render(){
    const {titulo} = this.state;
    return(
      <Text onPress={this.handlePress}>{titulo}</Text>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>hola</Text>
      <Text style={styles.texto2}>hola</Text>
      <Text style={styles.texto3}>hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto:{
    flex:1,
    color:'red',
    backgroundColor:'white'
  },
  texto2:{
    flex:2,
    color:'red',
    backgroundColor:'black'
  },
  texto3:{
    flex:3,
    color:'red',
    backgroundColor:'green'
  },
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#42e6a4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
