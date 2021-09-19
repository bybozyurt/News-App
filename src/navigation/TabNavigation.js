import React from "react";
import {} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from '../screens/SettingsScreen';
import AllNewsScreen from "../screens/AllNewsScreen";
import CustomIcon from '../components/CustomIcon';
import { colors } from "../constants";
import { MainStackNavigation } from "./StackNavigation";


export default function TabNavigator(){
    const Tab = createBottomTabNavigator();

    const screenOptions = {
        tabBarActiveTintColor:'tomato', 
        tabBarInactiveTintColor:'gray'
        
    };
    
    

    return(
        <Tab.Navigator screenOptions={screenOptions}>
    
            <Tab.Screen 
            name={'Headlines'} 
            component={MainStackNavigation}
            options={{
                headerShown:false,
                tabBarIcon: ()=> <CustomIcon name={'newspaper'} color={colors.c000000}/>
            }}
            
            />
            <Tab.Screen
                name={'WORLD NEWS'}
                component={AllNewsScreen}
                options={{
                    tabBarIcon:() => <CustomIcon name={'earth-sharp'} color={colors.c000000}/>
                }}
            />
            <Tab.Screen
            name={'Settings'}
            component={SettingsScreen}
            options={{
                tabBarIcon: ()=> <CustomIcon name={'settings'} color={colors.c000000}
                />
            }}
            />
            

            
        </Tab.Navigator>
    );
}