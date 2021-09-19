import React, {useEffect, useState} from 'react';
import {View, Image, Text,FlatList, SafeAreaView, TouchableHighlight} from 'react-native';
import styles from '../styles';
import MaterialComIcon from '../../components/MaterialCommunityIcon';
import { colors } from '../../constants';
import prettyTime from '../../config/PrettyTime';



export default function TechnologyScreen({navigation}){

    const country = 'tr';
    const category = 'technology';
    const API_KEY = 'f7a124b92a934e4f83b5e96e7a186dc5';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;


    const [headlines, setHeadlines] = useState({});


    async function fetchTopNews () {

        try {
            (await fetch(url))
            .json()
            .then(res => setHeadlines(res))
        
        } catch (error) {
            console.log("Axios Error"); 
        }
        
    }
    useEffect(() => {
        fetchTopNews();
            
        
        
    }, []);

    function Seperator (){
        return(
            <View style ={{borderBottomWidth:1, borderBottomColor:'gray'}}/>
        );
    }

    function renderItem({item}){
        return(
            <TouchableHighlight 
            onPress={()=> navigation.navigate('Web',{url:item.url, title:item.title})
            }
            underlayColor={0}
            >


            <View style={styles.ItemContainer}>
            <Image
            source={{uri:item.urlToImage}}
            style={styles.image}
            />
            <View style={styles.MetaItemContainer}>
                <Text style={styles.textTitle} >{item.title}</Text>
                
                <View style={styles.InfoContainer}>
                    <MaterialComIcon name={'beaker'} size={15} color={colors.c000000} />
                    <Text style={styles.textSourceName}>{item.source.name}</Text>

                    <MaterialComIcon name={'clock-outline'} size={15} color={colors.c000000}/>
                    <Text style={styles.textTime}>{prettyTime(item.publishedAt)}</Text>  
                             
                </View>
                
                                
            </View>
           
        </View>
        </TouchableHighlight>
        );
    }


    return(
        <SafeAreaView style={styles.container}>
        
            <FlatList 
                data={headlines.articles}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                ItemSeparatorComponent={()=> Seperator()}
                
                >

            </FlatList>
        </SafeAreaView>
    );
}

