import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from 'react-native';
import DrawerNavigator from "./DrawerNavigation";

export default function Navigation(){


    return(
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    );
}