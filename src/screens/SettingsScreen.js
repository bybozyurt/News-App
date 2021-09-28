import React from 'react'
import { View, Text, Switch, SafeAreaView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import DropDown from '../components/DropDown'
import {colors, fonts} from '../constants'
import styles from '../screens/styles';
import I18n, {changeLanguage} from '../i18n';
import {getDarkMode, getLang} from '../redux/system/selector';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { setLanguage, setTheme } from '../redux/system/action';
import CustomText from '../components/Text'
import Header from '../components/Header';




export default function SettingsScreen() {

    const language = getLang();
    const isDarkMode = getDarkMode();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const toggleTheme = val => {
        dispatch(setTheme(val));
    };

    const theme = isDarkMode ? styles.lightTheme : styles.darkTheme;

    const handleLanguageChange = lang => {
        if(lang){
            changeLanguage(language);
            navigation.navigate('Settings');
            dispatch(setLanguage(lang));
            
        }
    }

    //for ios
    const onDonePress = () => {
        changeLanguage(language);
        navigation.navigate('Settings');
    };

    


    return (
        <SafeAreaView style={[styles.cont,{backgroundColor:theme.backgroundColor}]}>
        <Header title={I18n.t('settings')}/>
        <View style={styles.view}>
        
            <CustomText style={styles.textTitle} text={I18n.t('changeLanguage')}></CustomText>
            <DropDown
                items={[
              {label: 'Türkçe', value: 'tr'},
              {label: 'English', value: 'en'},
            ]}
            style={{color: colors.c324c94}}
            placeholder={I18n.t('changeLanguage')}
            value = {language}
            onValueChange = {val => handleLanguageChange(val)}
            onDonePress={() => onDonePress()}
            color={isDarkMode ? colors.cFFFFFF : colors.c000000}
            
            />

            <View style={styles.row}>
                <CustomText style={styles.textTitle} text={'Dark Mode'}></CustomText>
                <Switch
                value={isDarkMode}
                onValueChange={val => toggleTheme(val)}

                />
            </View>
        </View>
        </SafeAreaView>
    )
}
