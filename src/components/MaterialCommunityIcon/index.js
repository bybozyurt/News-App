import React, {useMemo} from "react";
import { View } from "react-native";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { colors, fonts } from "../../constants";
import { getDarkMode } from "../../redux/system/selector";

export default function MaterialComIcon({name, color, size, style}){

    const isDark = getDarkMode();
    

    const iconStyles = useMemo(() => {
        const styles = {
          ...style,
          color: isDark ? colors.cFFFFFF : colors.c000000,
        };
        return styles;
    },[style,isDark]);
        


    return(
    
        <Icon name={name} color={color} size={size}  style={iconStyles} /> 
        
    );
}