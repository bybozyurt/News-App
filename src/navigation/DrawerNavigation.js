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
            <Draw.Screen
                name={'Technology'}
                component={TechnologyScreen}
                options={{
                    drawerIcon:() => <CustomIcon name={'hardware-chip-sharp'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Health'}
                component={HealthScreen}
                options={{
                    drawerIcon:() => <CustomIcon name={'heart-sharp'} color={colors.c000000}/>
                }}
            />
            <Draw.Screen
                name={'Science'}
                component={ScienceScreen}
                options={{
                    drawerIcon:() => <CustomIcon name={'flask'} color={colors.c000000} />
                }}
            />
            <Draw.Screen
                name={'Magazine'}
                component={FunScreen}
                options={{
                    drawerIcon:() => <CustomIcon name={'happy'} color={colors.c000000}/>
                }}
            />
       </Draw.Navigator>


    );
}