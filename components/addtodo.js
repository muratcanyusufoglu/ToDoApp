import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './addtodo.style'

const write =({item,submithandler})=>{

    return (
        <View style={styles.component}>
            <View style={styles.texttable}>
            <TouchableOpacity onPress={()=>submithandler(item.key)}>
            <Text style={styles.jobtext}>
                {item.text}
            </Text>            
            </TouchableOpacity>
            </View>
            <View style={styles.delete}>
            <TouchableOpacity onPress={()=>submithandler(item.key)} >                
            <Text>x</Text>
            </TouchableOpacity>
            </View>            

        </View>

    );
}

export default write