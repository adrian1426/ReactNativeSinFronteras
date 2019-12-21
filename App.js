import React from 'react';
import { 
  StyleSheet, 
  View,
  TextInput, 
  Text ,
  Button, 
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {

  state ={}

  handleCahnge = (texto) =>{
    this.setState({
      texto
    });
  }

  handlePress = () =>{
    alert(`Tu nombre es: ${this.state.texto}`);
  }

render(){
  return (
    <View style={styles.container}>

      <TextInput
        onChangeText={this.handleCahnge}
        placeholder="ingresar nombre"
      />

      <Button title="Aceptar" onPress={this.handlePress}/>

      <TouchableHighlight 
        style={styles.buton}
        onPress={this.handlePress}
      >
        <Text>Aceptar</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback
        onPress={this.handlePress}
      >
        <Text>Aceptar</Text>
      </TouchableWithoutFeedback>

      <TouchableOpacity 
        style={styles.buton}
        onPress={this.handlePress}
      >
        <Text>Aceptar</Text>
      </TouchableOpacity>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buton:{
    height:50,
    marginTop:10,
    padding: 15,
    backgroundColor:'#50d890'
  }
});
