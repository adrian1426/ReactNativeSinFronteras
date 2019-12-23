import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default class App extends React.Component {

  state={
    loading: true,
    users:[]
  }

  constructor(props){
    super(props);
    this.fetchUsers();
  }

  fetchUsers = async () =>{
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const preUsers = await response.json();
   const users = preUsers.map(x => ({...x, key:String(x.id)}));
   this.setState({
     users,
     loading: false
   });
  }

render(){
  const {loading, users} = this.state;

  if(loading){
    return(
      <View style={styles.container}>
        <Text>Cargando....</Text>
      </View>
    );
  }

  return(
  <View>
    <FlatList
      data={users}
      renderItem={({item})=>
        <Text>{item.name}</Text>
      }
    />
  </View>
  );
}
}