import React, {useMemo} from "react";
import {View, StyleSheet, Text, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';
import { getDarkMode } from "../redux/system/selector";
import { fonts, colors } from "../constants";
import CustomText from '../components/Text';
import Icon from 'react-native-vector-icons/Ionicons';



export default function BackHeader({
    title, style, onPress, color
}){
    const isDark = getDarkMode();

    const theme = isDark ? colors.light.black[100] : colors.dark.white[100];

    const iconStyles = useMemo(() => {
        const styles = {
          ...style,
          color: isDark ? colors.cFFFFFF : colors.c000000,
            
        };
        return styles;
    },[style,isDark]);
        

    return(
        
        <SafeAreaView style={Platform.OS === 'ios' ? {backgroundColor:theme} :
         {backgroundColor:theme, paddingTop:StatusBar.currentHeight }}>
        <StatusBar backgroundColor={theme} barStyle={isDark ? 'light-content' : 'dark-content'}/>
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon name={'arrow-back'} size={24} style={iconStyles} color={color} />
            </TouchableOpacity>
            <CustomText style={styles.text} text ={title}></CustomText>
        </View>
        </SafeAreaView>
        

    );
}

const styles = StyleSheet.create({

    container:{
        marginLeft:10,
        flexDirection:'row'

    },
    
    text:{
        fontSize:fonts.f20,
        fontWeight:'bold',
        color:colors.dark.white[100],
        marginHorizontal:5
    },
    lightTheme:{
        backgroundColor:colors.c000000,
        color:colors.c000000
    },
      darkTheme:{
        backgroundColor:'#FFFFFF',
        color:colors.cFFFFFF,
    },


})