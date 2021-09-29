import React from "react";
import {View, StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native';
import { getDarkMode } from "../../redux/system/selector";
import { fonts, colors } from '../../constants';
import CustomText from "../Text";
import I18n from '../../i18n';


export default function Header({
    title
}){
    const isDark = getDarkMode();

    const theme = isDark ? colors.light.black[100] : colors.dark.white[100];

    return(
        
        <SafeAreaView style={Platform.OS === 'ios' ? {backgroundColor:theme} :
         {backgroundColor:theme, paddingTop:StatusBar.currentHeight }}>
        <StatusBar backgroundColor={theme} barStyle={isDark ? 'light-content' : 'dark-content'}/>
        <View style={style.container}>
            <CustomText style={style.text} text ={title}></CustomText>
        </View>
        </SafeAreaView>
        

    );
}

const style = StyleSheet.create({

    container:{
        marginLeft:10,
        
    },
    
    text:{
        fontSize:fonts.f20,
        fontWeight:'bold',
        color:colors.dark.white[100]
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