import React from "react";
import {View, StyleSheet, Text} from 'react-native';


export default function Header({
    title
}){

    return(
        
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
        

    );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'gray'
    },
    
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        padding:10
    }
});