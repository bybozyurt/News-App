import React from 'react';
import { View, ScrollView} from 'react-native';
import Card from './src/components/Card';
import WebView from 'react-native-webview';
import Header from './src/components/Header';



export default function App(){

  return(
    

    <View style={{flex:1}}>
      

        <Header title={'Haberler'}/>
        <Card/>
      
    </View>
    // <WebView
    // source={{ uri: 'https://www.coindesk.com/markets/2020/10/02/bulls-exit-bitmex-bitcoin-futures-market/' }}
    // />
    
    
  );
}