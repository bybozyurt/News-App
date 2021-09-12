import React from 'react'
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function CustomIcon({name,color, style,}) {

    return (
        <View style={{...style}}>
            
            <Icon name={name} color={color} size={25} />
            
        </View>
        
    );
}
