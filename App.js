import React from 'react';
import { StyleSheet, View,TextInput, Text } from 'react-native';

export default class App extends React.Component {

  state ={}

  handleCahnge = (texto) =>{
    this.setState({
      texto
    });
  }
render(){
  const {texto} = this.state;
  return (
    <View style={styles.container}>

      <TextInput
        onChangeText={this.handleCahnge}
        placeholder="ingresar nombre"
      />

      <Text>{texto && `Mi nombre es: ${texto}`}</Text>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
