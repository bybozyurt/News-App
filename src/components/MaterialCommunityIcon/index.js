import React from "react";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";

export default function MaterialComIcon({name, color, size, style}){


    return(
        <Icon name={name} color={color} size={size} /> 
    );
}