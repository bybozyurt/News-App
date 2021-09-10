import React from "react";
import {} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../screens/SettingsScreen";
import CustomIcon from '../components/CustomIcon';
import { colors } from "../constants";



export default function DrawerNavigator(){

    const Draw = createDrawerNavigator();

    const AppScreens ={
        
        kategoriler:'Kategoriler'
    }


    return(

        <Draw.Navigator>
            
            <Draw.Screen
                name={AppScreens.kategoriler}
                component={SettingsScreen}
                options={{
                    drawerIcon:()=> <CustomIcon name={'newspaper'} color={colors.c000000}/>
                }}
            />
        </Draw.Navigator>


    );
}