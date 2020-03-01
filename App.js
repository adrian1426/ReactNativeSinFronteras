import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text} from 'react-native';

export default function App() {

  const [loading, setLoading] = useState(true);
  const [users,setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    setUsers(json);
    setLoading(false);
  };
  
  useEffect( ()=>{
    fetchUsers();
  },[]);

  const valor =  loading ? 'cargando...' : users[0].name;
  return(
    <View style={estilos.container}>
      <Text>Nombre: {valor}</Text>
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