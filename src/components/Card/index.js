import React from 'react';
import {View, Image, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Data from '../../Data/data';
import Button from '../CustomButton';
import WebView from 'react-native-webview';






export default function Card(){

    function Seperator (){
        return(
            <View style ={{borderBottomWidth:1, borderBottomColor:'gray'}}/>
        );
    }

    function Web(){
        return(
            
            <WebView
             source={{ uri: 'https://logrocket.com/' }}
             style={{flex:1}}
            />
            
        );
    }

    

    


    return(
        <SafeAreaView style={styles.container}>
        
            <FlatList 
                data={Data}
                keyExtractor={item => item.u_id.toString()}
                ItemSeparatorComponent={()=> Seperator()}
                renderItem={({item}) =>(
                    <View style={styles.ItemContainer}>
                        <Image
                            source={{uri:item.imageUrl}}
                            style={styles.image}
                        />

                        <View style={styles.MetaItemContainer}>
                            <Text style={[styles.textTitle],{}}>{item.title}</Text>
                            <Text style={styles.textAuthor}>{item.author}</Text>
                
                            <Button 
                            title={'Detaylar'} 
                            style={{marginVertical:30}}
                            onPress={() => Web()}
                            />
                            
                        </View>

                        
                    </View>

                )}
                >

            </FlatList>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white'
    },
    image:{
        width:145,
        height:158
    },
    
    ItemContainer:{
        flexDirection:'row',
        paddingLeft:5
    },
    MetaItemContainer:{
        padding:5,
        paddingLeft:5
    },

    textTitle:{
        fontSize:12,
        fontWeight:'bold'
    },
    textAuthor:{
        fontSize:10,
        fontWeight:'200'
    },



   
});