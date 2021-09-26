import React from 'react';
import {View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import style from './style';
import {colors, fonts} from '../../constants';
export default function DropDown({
    items,
    value,
    onValueChange,
    placeholder,
    color,
    borderColor,

    onDonePress = () =>{}
}){

    return(
        <View style={style.dropDown}>
            <RNPickerSelect
                onValueChange={val => onValueChange(val)}
                items={items}
                value={value}
                placeholder={{label: placeholder, value:null}}
                onDonePress={() => onDonePress()}
                style={{
                    inputIOS: {
                    fontSize: fonts.f13,
                    fontWeight: 'bold',
                    color: color,
                    borderColor
                },
                    inputAndroid: {
                    fontSize: fonts.f13,
                    fontWeight: 'bold',
                    color: color,
                    borderColor
                },
        }}
            />
        </View>
    );



}