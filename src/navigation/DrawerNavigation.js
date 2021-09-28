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
import I18n from '../i18n';


export default function DrawerNavigator(){

    const Draw = createDrawerNavigator();

    const headlinesTitle = I18n.t('headlines');
    const businessTitle = I18n.t('business');
    const sportTitle = I18n.t('sport');
    const healthTittle = I18n.t('health');
    const technologyTitle = I18n.t('technology');
    const scienceTitle = I18n.t('science');
    const magazineTitle = I18n.t('magazine');



    return(

        <Draw.Navigator>
            
            {/* <Draw.Screen
                name={'Headlines'}
                component={TabNavigator}
                options={{
                    title:headlinesTitle,
                    headerShown:false,
                    drawerIcon:()=> <CustomIcon name={'newspaper'} color={colors.c000000}/>
                }}
            />
            
            <Draw.Screen
                name={'Business'}
                component={EconomyScreen}
                options={{
                    title:businessTitle,
                    headerShown:false,
                    drawerIcon:() => <CustomIcon name={'logo-usd'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Sport'}
                component={SportScreen}
                options={{
                    title:sportTitle,
                    headerShown:false,
                    drawerIcon:() => <CustomIcon name={'football'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Technology'}
                component={TechnologyScreen}
                options={{
                    title:technologyTitle,
                    headerShown:false,
                    drawerIcon:() => <CustomIcon name={'hardware-chip-sharp'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Health'}
                component={HealthScreen}
                options={{
                    title:healthTittle,
                    headerShown:false,
                    drawerIcon:() => <CustomIcon name={'heart-sharp'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Science'}
                component={ScienceScreen}
                options={{
                    title:scienceTitle,
                    headerShown:false,
                    drawerIcon:() => <CustomIcon name={'flask'} color={colors.c000000} />
                }}
            />
            <Draw.Screen
                name={'Magazine'}
                component={FunScreen}
                options={{
                    title:magazineTitle,
                    headerShown:false,
                    drawerIcon:() => <CustomIcon name={'happy'} color={colors.c000000}/>
                }}
            /> */}
       </Draw.Navigator>


    );
}