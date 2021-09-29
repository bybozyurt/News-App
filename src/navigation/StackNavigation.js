import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import WebViewScreen from '../screens/WebViewScreen';
import HeadlinesScreen from '../screens/HeadlinesScreen';
import I18n from '../i18n';
import EverythingScreen from '../screens/EverythingScreen';
import { getDarkMode } from '../redux/system/selector';
import CategoryScreen from '../screens/CategoryScreen';
import SourceNewsScreen from '../screens/SourceNewsScreen';
import SourceScreen from '../screens/SourceScreen';

const Stack = createStackNavigator();


function MainStackNavigation() {

    const isDark = getDarkMode()

    return (
        <Stack.Navigator >
            <Stack.Screen name={'Headlines'} component={HeadlinesScreen} options={{headerShown:false,title:I18n.t('headlines')}}/>
            <Stack.Screen name={'Web'} component={WebViewScreen} />
            <Stack.Screen name={'Everything'} component={EverythingScreen} options={{
                headerShown:false
                }}/>
            <Stack.Screen name={'Categories'} component={CategoryScreen} options={{headerShown:false}}/>
            <Stack.Screen name={'Source'} component={SourceScreen} options={{headerShown:false}}/>
            <Stack.Screen name={'Sourcenews'} component={SourceNewsScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
        
    )
}

export {MainStackNavigation};
