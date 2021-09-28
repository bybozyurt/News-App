import {StyleSheet} from 'react-native';
import { colors, fonts } from '../constants'

const styles = StyleSheet.create({
    container:{
        flex:1,
        color:colors.cFFFFFF
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
    lightTheme:{
        backgroundColor:colors.c000000,
        color:colors.c000000
    },
      darkTheme:{
        backgroundColor:'#FFFFFF',
        color:colors.cFFFFFF,
    },
    view :{
        padding:20, 
        
    },
    cont:{
        flex:1,
    },
    categoriesİmage:{
        width:170,
        height:170,
        borderRadius:20
    },
    imageViewRow:{
        flexDirection:'row', 
        margin:10, 
        alignItems:'center', 
        justifyContent:'center'

    },
    imageMetaView:{
        alignItems:'center',
        marginHorizontal:15
    },
    categoriesContainer:{
        flex:1,
        
    }

})

export default styles;