import React from 'react'
import { View, Text, Switch } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import DropDown from '../components/DropDown'
import {colors, fonts} from '../constants'
import styles from '../screens/styles';


export default function SettingsScreen() {
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
            />

            <View style={styles.row}>
                <Text style={styles.textTitle}>Dark Mode</Text>
                <Switch/>
            </View>
        </View>
    )
}
