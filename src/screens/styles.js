import {StyleSheet} from 'react-native';
import { colors, fonts } from '../constants'

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.cFFFFFF,
    },
    image:{
        width:130,
        height:130
    },
    
    ItemContainer:{
        flexDirection:'row',
        paddingLeft:5
    },
    MetaItemContainer:{
        flex:1,
        paddingLeft:5,
           
    },
    InfoContainer:{
        justifyContent:'space-between',
        alignItems:'flex-end',
        flex:1, 
        flexDirection:'row',
        paddingRight:5,
        

    },

    textTitle:{
        fontSize:fonts.f14,
        
    },
    textSourceName:{
        fontSize:fonts.f13,
        fontWeight:'bold',
        paddingRight:0
    },
    textTime:{
        fontSize:fonts.f13,
        fontWeight:'bold'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:10
    },

})

export default styles;