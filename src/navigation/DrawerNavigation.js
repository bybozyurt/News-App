import React from "react";
import {} from 'react-native';
import AllNewSourcesScreen from "../screens/AllNewSourcesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../screens/SettingsScreen";
import DrawerBarIcon from "../components/DrawerBarIcon/DrawerBarIcon";



export default function DrawerNavigator(){

    const Draw = createDrawerNavigator();


    return(

        <Draw.Navigator>
            <Draw.Screen
                name={'Root'}
                component={AllNewSourcesScreen}
                options={{
                    drawerIcon:()=> <DrawerBarIcon name={'newspaper'} color={'black'} />
                }}
            />
            <Draw.Screen
                name={'Settings'}
                component={SettingsScreen}
                options={{
                    drawerIcon:()=> <DrawerBarIcon name={'settings'} color={'black'}/>
                }}
            />
        </Draw.Navigator>


    );
}