import React, {useMemo} from 'react';
import { Text } from 'react-native';
import { getDarkMode } from '../../redux/system/selector';
import {colors, fonts} from '../../constants';

export default function CustomText({text, style}) {
    const isDark = getDarkMode();
      
    const textStyle = useMemo(() => {
      const styles = {
        fontSize: fonts.f13,
        fontWeight: '600',
        ...style,
        color: isDark ? colors.cFFFFFF : colors.c000000,
      };
  
      return styles;
    }, [style, isDark]);
  
    return <Text style={textStyle}>{text}</Text>;
  }