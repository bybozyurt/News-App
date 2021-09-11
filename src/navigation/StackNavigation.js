import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import WebViewScreen from '../screens/WebViewScreen';
import HeadlinesScreen from '../screens/HeadlinesScreen';

const Stack = createStackNavigator();


function MainStackNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Headlines'} component={HeadlinesScreen}/>
            <Stack.Screen name={'Web'} component={WebViewScreen}/>
        </Stack.Navigator>
        
    )
}

export {MainStackNavigation};
