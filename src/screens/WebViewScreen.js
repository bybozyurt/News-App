import React from "react";
import {SafeAreaView, View} from 'react-native';
import WebView from "react-native-webview";


export default function WebViewScreen({navigation}){
    console.log("nav",navigation);
    return(
        <SafeAreaView style={{flex:1}}>

        <WebView
            source={{uri:'https://github.com/bybozyurt'}}
            
        />
        </SafeAreaView>
        
    );
}