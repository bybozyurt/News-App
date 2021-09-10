import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


export default function CustomIcon({name,color}) {

    return (
        <Icon name={name} color={color} size={25}/>
        
    );
}
