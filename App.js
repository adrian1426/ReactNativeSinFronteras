import React from 'react';
import {View,StyleSheet, Button, Modal, Text} from 'react-native';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  fondo:{
    backgroundColor:'#bac7a7'
  },
  estiloModal:{
    margin:55,
    backgroundColor:'#ff896b',
    borderRadius: 10
  }
});

export default class App extends React.Component {

  state={
    open: false
  }

render(){
  const {open} = this.state;
  return(
    <View style={[styles.container,styles.fondo]}>

      <Modal 
        visible={open} 
        animationType='slide'
        transparent={true}
      >
        <View style={[styles.container,styles.estiloModal]}>
          <Button title="Cerrar Modal" onPress={()=>this.setState({open:false})}/>
        </View>
      </Modal>

      <Button title="Abrir Modal" onPress={()=>this.setState({open:true})}/>

    </View>
  );
}
}