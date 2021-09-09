import React from "react";
import {} from 'react-native';
import AllNewSourcesScreen from "../screens/AllNewSourcesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../screens/SettingsScreen";



export default function DrawerNavigator(){

    const Draw = createDrawerNavigator();


    return(

        <Draw.Navigator>
            <Draw.Screen
                name={'Root'}
                component={AllNewSourcesScreen}
            />
            <Draw.Screen
                name={'Settings'}
                component={SettingsScreen}
            />
        </Draw.Navigator>


    );
}