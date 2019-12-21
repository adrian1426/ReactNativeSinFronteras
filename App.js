import React from 'react';
import {Text, View, FlatList} from 'react-native';

export default class App extends React.Component {
render(){
  return (
    <View>
      <FlatList
        data={[
          {name:'Memphis' , key:'1'},
          {name:'Hazard' , key:'2'},
          {name:'Vinicius' , key:'3'},
          {name:'Mbappe' , key:'4'},
          {name:'Cavani' , key:'5'},
          {name:'Giniac' , key:'6'},
          {name:'Valencia' , key:'7'},
          {name:'Dos santos' , key:'8'},
          {name:'Cavani' , key:'9'},
          {name:'Giniac' , key:'10'},
          {name:'Valencia' , key:'11'},
          {name:'Dos santos' , key:'12'}
        ]}
        renderItem={
          ({item})=><Text style={{fontSize: 80}}>{item.name}</Text>
        }
      />
    </View>
  );
}
}