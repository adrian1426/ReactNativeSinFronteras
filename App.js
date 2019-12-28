import React from 'react';
import {View,StyleSheet, Button, Modal, Image} from 'react-native';

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

      <Image 
        source={require('./assets/naruto.jpg')}
        style={{height:300,width:300}}
      />
      <Image 
        source={{uri:'https://www.milenio.com/uploads/media/2019/11/04/el-estreno-de-naruto-shippuden_0_26_800_498.jpg'}}
        style={{height:300,width:300}}
      />

      <Button title="Abrir Modal" onPress={()=>this.setState({open:true})}/>

    </View>
  );
}
}