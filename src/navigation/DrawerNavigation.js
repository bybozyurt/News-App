import React from "react";
import {} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomIcon from '../components/CustomIcon';
import { colors } from "../constants";
import EconomyScreen from '../screens/categoryScreens/EconomyScreen';
import TabNavigator from "./TabNavigation";
import SportScreen from "../screens/categoryScreens/SportScreen";


export default function DrawerNavigator(){

    const Draw = createDrawerNavigator();


    return(

        <Draw.Navigator>
            
            <Draw.Screen
                name={'Headlines'}
                component={TabNavigator}
                options={{
                    headerShown:false,
                    drawerIcon:()=> <CustomIcon name={'newspaper'} color={colors.c000000}/>
                }}
            />
            
            <Draw.Screen
                name={'Business'}
                component={EconomyScreen}
                options={{
                    drawerIcon:() => <CustomIcon name={'logo-usd'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Sport'}
                component={SportScreen}
                options={{
                    drawerIcon:() => <CustomIcon name={'football'} color={colors.c000000}/>
                }}
            />
       </Draw.Navigator>


    );
}