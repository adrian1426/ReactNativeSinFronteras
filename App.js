import React from 'react';
import {Text, View,StyleSheet, ActivityIndicator} from 'react-native';

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
render(){
  return(
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="gray"
      />
    </View>
  );
}
}