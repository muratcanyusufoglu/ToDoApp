import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import styles from './todolist.style';


const todolist =({submitnewjob})=>{

    const [value,setvalue]=useState('')

    const changehandler=(val)=>{
        setvalue(val)

    }

    return(
        <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Add a new job..."
        onChangeText={changehandler}        
        />
        <View style={styles.button}>
        <Button
        color="#aa1d23"
        onPress={()=>submitnewjob(value)}
        title="+"
        />
        </View>
        
        
        </View>

    );
}

export default todolist;