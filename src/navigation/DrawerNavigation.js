import React from "react";
import {} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomIcon from '../components/CustomIcon';
import { colors } from "../constants";
import EconomyScreen from '../screens/categoryScreens/EconomyScreen';
import TabNavigator from "./TabNavigation";
import SportScreen from "../screens/categoryScreens/SportScreen";
import TechnologyScreen from "../screens/categoryScreens/TechnologyScreen";
import HealthScreen from "../screens/categoryScreens/HealthScreen";
import ScienceScreen from "../screens/categoryScreens/ScienceScreen";
import FunScreen from "../screens/categoryScreens/FunScreen";
import I18n from '../i18n'


export default function DrawerNavigator(){

    const Draw = createDrawerNavigator();

    const headTitle = I18n.t('headlines');


    return(

        <Draw.Navigator>
            
            <Draw.Screen
                name={'Headlines'}
                component={TabNavigator}
                options={{
                    title:headTitle,
                    headerShown:false,
                    drawerIcon:()=> <CustomIcon name={'newspaper'} color={colors.c000000}/>
                }}
            />
            
            <Draw.Screen
                name={'Business'}
                component={EconomyScreen}
                options={{
                    title:I18n.t('business'),
                    drawerIcon:() => <CustomIcon name={'logo-usd'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Sport'}
                component={SportScreen}
                options={{
                    title:I18n.t('sport'),
                    drawerIcon:() => <CustomIcon name={'football'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Technology'}
                component={TechnologyScreen}
                options={{
                    title:I18n.t('technology'),
                    drawerIcon:() => <CustomIcon name={'hardware-chip-sharp'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Health'}
                component={HealthScreen}
                options={{
                    title:I18n.t('health'),
                    drawerIcon:() => <CustomIcon name={'heart-sharp'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Science'}
                component={ScienceScreen}
                options={{
                    title:I18n.t('science'),
                    drawerIcon:() => <CustomIcon name={'flask'} color={colors.c000000} />
                }}
            />
            <Draw.Screen
                name={'Magazine'}
                component={FunScreen}
                options={{
                    title:I18n.t('magazine'),
                    drawerIcon:() => <CustomIcon name={'happy'} color={colors.c000000}/>
                }}
            />
       </Draw.Navigator>


    );
}