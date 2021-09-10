import React from "react";
import {} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HeadlinesScreen from '../screens/HeadlinesScreen';
import AllNewsScreen from "../screens/AllNewsScreen";
import CustomIcon from '../components/CustomIcon';
import { colors } from "../constants";

export default function TabNavigator(){
    const Tab = createBottomTabNavigator();

    const TabScreens = {
        topNews:'Öne Çıkan Haberler',
        allNews:'Tüm Haberler',
        
    }


    return(
        <Tab.Navigator>
            <Tab.Screen 
            name={TabScreens.topNews} 
            component={HeadlinesScreen}
            options={{
                tabBarIcon: ()=> <CustomIcon name={'newspaper'} color={colors.c000000}/>
            }}

            />
            <Tab.Screen
            name={TabScreens.allNews}
            component={AllNewsScreen}
            options={{
                tabBarIcon: ()=> <CustomIcon name={'book'} color={colors.c000000}/>
            }}

            />
        </Tab.Navigator>
    );
}