import { StyleSheet } from "react-native";
import {colors, fonts} from '../../constants';

const styles = StyleSheet.create({

    dropDown:{
        height: Platform.OS === 'ios' ? 42 : 38,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        color: colors.dark.white[100],
    },
      
})

export default styles;