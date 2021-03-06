import React from "react";
import { View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from '../screens/SettingsScreen';
import AllNewsScreen from "../screens/AllNewsScreen";
import CustomIcon from '../components/CustomIcon';
import { colors } from "../constants";
import { MainStackNavigation } from "./StackNavigation";
import I18n from '../i18n';
import { getDarkMode } from "../redux/system/selector";
import styles from "../screens/styles";
import CategoryScreen from "../screens/CategoryScreen";
import SourceScreen from '../screens/SourceScreen';



export default function TabNavigator(){
    const Tab = createBottomTabNavigator();

    const headlinesTitle = I18n.t('headlines');
    const foreignTitle = I18n.t('foreign');
    const settingsTitle = I18n.t('settings');
    const categoriesTitle = I18n.t('categories');
    const sourcesTitle = I18n.t('sources');
   
   


    

    const screenOptions = {
        tabBarActiveTintColor:'tomato', 
        tabBarInactiveTintColor:'gray',
        headerShown:false,
        

    };
    
    
    return(

        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
            name={'Headlines'} 
            component={MainStackNavigation}
            options={{
                title:headlinesTitle,
                tabBarIcon: ()=> <CustomIcon name={'newspaper'} color={colors.c000000}/>
                
            }}
            />
            <Tab.Screen
                name={'Foreign'}
                component={AllNewsScreen}
                options={{
                    title:foreignTitle,
                    tabBarIcon:() => <CustomIcon name={'earth-sharp'} color={colors.c000000}/>
                }}
            />
            <Tab.Screen
                name={'Categories'}
                component={CategoryScreen}
                options={{
                    title:categoriesTitle,
                    tabBarIcon: () => <CustomIcon name={'apps'} color={colors.c000000}/>
                }}
            />
            <Tab.Screen
            name = {'Sources'}
            component={SourceScreen}
            options={{
                title:sourcesTitle,
                tabBarIcon: ()=> <CustomIcon name={'book'} color={colors.c000000} />
            }} 
            />
            <Tab.Screen
            name={'Settings'}
            component={SettingsScreen}
            options={{
                title:settingsTitle,
                tabBarIcon: ()=> <CustomIcon name={'settings'} color={colors.c000000}
                />
            }}
            />


        </Tab.Navigator>
        
       
    );
}