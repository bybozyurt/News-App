import React from "react";
import {SafeAreaView, View} from 'react-native';
import WebView from "react-native-webview";
import { useRoute } from "@react-navigation/native";




export default function WebViewScreen(){
    
    const {params} = useRoute();
    
    return(
        <SafeAreaView style={{flex:1}}>
        <WebView
            source={{uri:params.url}}   
        />
        </SafeAreaView>
        
    );
}