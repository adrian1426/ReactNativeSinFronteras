import React from 'react';
import {View, Text, Button,TouchableOpacity, StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import {Camera} from 'expo-camera';

export default class App extends React.Component {

  state={
    perm: null,
    typeCamera: Camera.Constants.Type.back
  }

  async componentDidMount(){
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({perm: status});
  }

  cambiarCamara = () =>{
    const {Type} = Camera.Constants;
    const typeCamera = Type.back === this.state.typeCamera ? Type.front : Type.back;
    this.setState({typeCamera});
  }

  tomarFoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log("foto: ",photo)
    }
  };

render(){
  const {perm,typeCamera} = this.state;
    if(perm===null){
      return <View style={estilos.container}/>
    }
    else if(perm==='denegaded'){
     return(<View style={estilos.container}><Text>Dame permisos!!!</Text></View>);
    }
    else{
      return(
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={typeCamera} ref={ref =>{this.camera=ref}}> 
            <View style={{
              flex:1,
              backgroundColor: 'transparent',
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-end',
              padding:10
            }}>
              <Button title="cambiar camara" onPress={this.cambiarCamara}/>
              <Button title="tomar foto" onPress={this.tomarFoto}/>
            </View>
          </Camera>
        </View>
      );
    }
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