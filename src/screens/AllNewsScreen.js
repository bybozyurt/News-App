import React, {useEffect, useState} from 'react';
import {View, Image, Text,FlatList, SafeAreaView, TouchableHighlight} from 'react-native';
import styles from './styles';
import MaterialComIcon from '../components/MaterialCommunityIcon'
import { colors } from '../constants'
import prettyTime from '../config/PrettyTime';
import CustomText from '../components/Text';
import Header from '../components/Header';
import I18n from '../i18n';
import CustomView from '../components/CustomView';




export default function AllNewsScreen({navigation}){

    //Yabancı Ekranı

    const country = 'us';
    const category = 'top-headlines';
    const API_KEY = 'f7a124b92a934e4f83b5e96e7a186dc5';

    const newsApiUrl = `https://newsapi.org/v2/${category}?country=${country}&apiKey=${API_KEY}`;

    //const newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY};'
 
    const [headlines, setHeadlines] = useState({});



    async function fetchTopNews () {

        try {
            (await fetch(newsApiUrl))
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
                <CustomText style={styles.textTitle} text={item.title} ></CustomText>
                
                <View style={styles.InfoContainer}>
                    <MaterialComIcon name={'beaker'} size={15} color={colors.c000000} />
                    <CustomText style={styles.textSourceName} text={item.source.name} ></CustomText>

                    <MaterialComIcon name={'clock-outline'} size={15} color={colors.c000000}/>
                    <CustomText style={styles.textTime} text={prettyTime(item.publishedAt)} ></CustomText>  
                             
                </View>
                
                                
            </View>
           
        </View>
        </TouchableHighlight>
        );
    }


    return(
        <CustomView style={styles.container}>
            <Header title={I18n.t('foreign')} />
        
        
            <FlatList 
                data={headlines.articles}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                ItemSeparatorComponent={()=> Seperator()}
                
                >

            </FlatList>
        </CustomView>
    );
}

