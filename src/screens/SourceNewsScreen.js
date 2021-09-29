import React, {useEffect, useState} from 'react';
import {View, Image, Text,FlatList, SafeAreaView, TouchableHighlight} from 'react-native';
import styles from './styles';
import MaterialComIcon from '../components/MaterialCommunityIcon'
import { colors } from '../constants'
import prettyTime from '../config/PrettyTime';
import CustomText from '../components/Text';
import { getCategory, getCountry } from '../redux/system/selector';
import CustomView from '../components/CustomView';
import BackHeader from '../BackHeader';
import {useNavigation, useRoute} from '@react-navigation/native';



export default function SourceNewsScreen(){

    //Kategoriye göre haber listeleme ekranı

    const {params} = useRoute();
    const navigation = useNavigation();
    const domain = params.domain;



    const API_KEY = 'f7a124b92a934e4f83b5e96e7a186dc5';
    const url = `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${API_KEY}`;

    
 
    const [headlines, setHeadlines] = useState({});

    const goBack = () => {
        navigation.navigate('Categories');
    };

    
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
                <CustomText style={styles.textTitle} text={item.title}></CustomText>
                
                <View style={styles.InfoContainer}>
                    <MaterialComIcon name={'beaker'} size={15} color={colors.c000000} />
                    <CustomText style={styles.textSourceName} text={item.source.name}></CustomText>

                    <MaterialComIcon name={'clock-outline'} size={15} color={colors.c000000}/>
                    <CustomText style={styles.textTime} text={prettyTime(item.publishedAt)}></CustomText>            
                </View>                  
            </View> 
        </View>
        </TouchableHighlight>
        );
    
    }


    return(
        <CustomView style={styles.container}>
        <BackHeader title={'Kaynaklar'} onPress={()=> goBack()}  />
        
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

