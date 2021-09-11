import React from "react";
import {} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomIcon from '../components/CustomIcon';
import { colors } from "../constants";
import EconomyScreen from '../screens/categoryScreens/EconomyScreen';
import TabNavigator from "./TabNavigation";
import Sport from "../screens/categoryScreens/Sport";


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
                name={'Economy'}
                component={EconomyScreen}
                options={{
                    drawerIcon:() => <CustomIcon name={'sell'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Sport'}
                component={Sport}
                options={{
                    drawerIcon:() => <CustomIcon name={'sell'} color={colors.c000000}/>
                }}
            />
       </Draw.Navigator>


    );
}