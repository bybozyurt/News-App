import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';




export default function Button({
    onPress,
    title,
    style
}){

    return(
        <View style={[styles.Container],{...style}}>
        <TouchableOpacity onPress = {onPress} style={styles.Button}>
            <Text style={styles.Text}>{title}</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flexDirection:'row',
        borderRadius: 5,
        padding:17
        
      },
      Text: {
        fontSize:12,
        height:15,
        letterSpacing:1.2,
        fontWeight: "bold",
        alignSelf: "center",
        color:'black',
      },
      Button:{
          width:75,
          backgroundColor:'white',
          borderColor:'gray',
          borderRadius:5,
          borderWidth:1,
          height:50,
          alignItems:'center',
          justifyContent:'center'

        }

});