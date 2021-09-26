import React from 'react'
import { View, Text, Switch } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import DropDown from '../components/DropDown'
import {colors, fonts} from '../constants'
import styles from '../screens/styles';
import I18n, {changeLanguage} from '../i18n';
import {getLang} from '../redux/system/selector';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { setLanguage } from '../redux/system/action'


export default function SettingsScreen() {

    const language = getLang();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    

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
        <View style={{padding:20, elevation:3}}>
            <Text style={styles.textTitle}>Change Language</Text>
            <DropDown
                items={[
              {label: 'Türkçe', value: 'tr'},
              {label: 'English', value: 'en'},
            ]}
            style={{color: colors.c324c94}}
            placeholder={'Change Language'}
            value = {language}
            onValueChange = {val => handleLanguageChange(val)}
            onDonePress={() => onDonePress()}
            />

            <View style={styles.row}>
                <Text style={styles.textTitle}>Dark Mode</Text>
                <Switch/>
            </View>
        </View>
    )
}
