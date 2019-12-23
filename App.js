import React from 'react';
import {Text, View, Picker, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex:1,
    justifyContent:'center'
  },
  picker:{
    height:70,
    width:150
  }
});

export default class App extends React.Component {
  state={};
render(){
  return(
    <View style={styles.container}>
      <Picker 
        selectedValue={this.state.value || "id_1"}
        style={styles.picker}
        onValueChange={(value,index)=>{
          this.setState({
            value
          });
        }}
      >
        <Picker.Item label="Opcion 1"value="id_1"/>
        <Picker.Item label="Opcion 2"value="id_2"/>
        <Picker.Item label="Opcion 3"value="id_3"/>
        <Picker.Item label="Opcion 4"value="id_4"/>
      </Picker>
    </View>
  );
}
}