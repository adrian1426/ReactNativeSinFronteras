import React,{useReducer} from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';

const initialState={
  cont: 0
};

const reducer = (state,action) =>{
  switch (action.type) {
    case 'incrementar':{
      return {cont: state.cont + 1};
    }
      break;
    case 'decrementar':{
      return {cont: state.cont - 1};
    }
      break;
    default:
      return state;
      break;
  }
};

export default function App() {

  const [state,dispatch] = useReducer(reducer,initialState);

  return(
    <View style={estilos.container}>
      <Button title='Incrementar' onPress={()=> dispatch({type:'incrementar'})}/>
      <Text>{state.cont}</Text>
      <Button title='Decrementar' onPress={()=> dispatch({type:'decrementar'})}/>
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