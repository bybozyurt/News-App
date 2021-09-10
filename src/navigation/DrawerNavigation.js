import React from "react";
import {} from 'react-native';
import AllNewSourcesScreen from "../screens/AllNewSourcesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../screens/SettingsScreen";
import DrawerBarIcon from "../components/DrawerBarIcon/DrawerBarIcon";
import { colors } from "../constants";



export default function DrawerNavigator(){

    const Draw = createDrawerNavigator();

    const AppScreens ={
        topNews:'Öne Çıkan Haberler',
        AllNews:'Tüm Haberler',
    }


    return(

        <Draw.Navigator>
            <Draw.Screen
                name={AppScreens.topNews}
                component={AllNewSourcesScreen}
                options={{
                    drawerIcon:()=> <DrawerBarIcon name={'star'} color={colors.c000000} />
                }}
            />
            <Draw.Screen
                name={AppScreens.AllNews}
                component={SettingsScreen}
                options={{
                    drawerIcon:()=> <DrawerBarIcon name={'newspaper'} color={colors.c000000}/>
                }}
            />
        </Draw.Navigator>


    );
}