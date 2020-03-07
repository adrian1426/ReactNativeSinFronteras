import React,{useState,useCallback} from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';

//useCallback mejoras temas de rendimiento y performance.
//para que no se renderize desmedidamente las fucniones.
export default function App() {

  const [cont,setCont] = useState(0);

  const incrementar = useCallback(() =>{
    setCont(cont + 1);
  },[cont]);

  const decrementar = useCallback(() =>{
    setCont(cont - 1);
  },[cont]);

  return(
    <View style={estilos.container}>
      <Button title='Incrementar' onPress={()=> incrementar()}/>
      <Text>{cont}</Text>
      <Button title='Decrementar' onPress={()=> decrementar()}/>
    </View>
  );

};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});