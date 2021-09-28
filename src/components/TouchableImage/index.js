import React from 'react'
import {Image, TouchableOpacity } from 'react-native'

export default function TouchableImage({onPress, source, style}) {
    return (

        <TouchableOpacity onPress={onPress}>
            <Image
            source={source}
            style={style}
            />
        </TouchableOpacity>
    )
}
