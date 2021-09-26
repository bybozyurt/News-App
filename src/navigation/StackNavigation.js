import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import WebViewScreen from '../screens/WebViewScreen';
import HeadlinesScreen from '../screens/HeadlinesScreen';
import I18n from 'i18n-js';

const Stack = createStackNavigator();


function MainStackNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Headlines'} component={HeadlinesScreen} options={{title:I18n.t('headlines')}}/>
            <Stack.Screen name={'Web'} component={WebViewScreen} />
        </Stack.Navigator>
        
    )
}

export {MainStackNavigation};
