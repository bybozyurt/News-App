import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from 'react-native';
import DrawerNavigator from "./DrawerNavigation";
import TabNavigator from "./TabNavigation";

export default function Navigation(){


    return(
        <NavigationContainer>
            <DrawerNavigator/>
            
        </NavigationContainer>
    );
}