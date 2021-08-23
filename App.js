import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Addtodo from './components/addtodo';
import Todolist from './components/todolist';


function App() {

  const [list,setList]=useState([
    {text:'learn react',key:'1'},
    {text:'wash dishes',key:'2'},
    {text:'read a book',key:'3'},
    {text:'write a story',key:'4'},
    
  ]);

  const writeitem=({item})=>(<Addtodo item={item} submithandler={submithandler}/>);
  
  const submitnewjob=(value)=>{

     setList(list=>{

      return [{text:value,key:Math.random().toString()},
      ...list];
    }
     ) 
  }

  const submithandler=(item)=>{
    setList(list=>{
      return list.filter(listitem=>listitem.key != item)
    })
  }
  
  return (
    <View style={styles.container}>
     
      
      
      <Text style={styles.worklist}>Work List</Text>
      <View style={styles.seperator}/>
      
      <FlatList
      data={list}
      renderItem={writeitem}
      />
      <Todolist submitnewjob={submitnewjob}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5efff',
       
  },
  worklist:{
    marginTop:30,
    fontWeight:'bold',
    marginLeft:10,
    fontSize:35,
  },
  seperator:{
    
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    
    marginBottom:30,
    
    
  }
});

export default App