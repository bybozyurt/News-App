import React, {useEffect, useState} from 'react';
import {View, Image, Text,FlatList, SafeAreaView} from 'react-native';
import styles from './styles';




export default function Card(){

    const newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&apiKey=f7a124b92a934e4f83b5e96e7a186dc5';

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

            <View style={styles.ItemContainer}>
            <Image
            source={{uri:item.urlToImage}}
            style={styles.image}
            />
            <View style={styles.MetaItemContainer}>
                <Text style={styles.textTitle} >{item.title}</Text>
                <View style={styles.InfoContainer}>
                    <Text style={styles.textAuthor}>{item.author}</Text>
                    <Text style={styles.textTime}>{item.publishedAt}</Text>          
                </View>                
            </View>
           
        </View>
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

