import React from "react";
import {View} from 'react-native';
import WebView from "react-native-webview";


export default function WebViews(){
    return(
        
        <WebView
            source={{uri:'google.com'}}
            style={{flex:1}}
        />
        
    );
}