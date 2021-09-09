import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


export default function DrawerBarIcon({name,color}) {

    return (
        <Icon name={name} color={color} size={25}/>
        
    );
}
