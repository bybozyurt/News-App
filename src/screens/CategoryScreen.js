import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { fonts, colors } from '../constants';
import styles from './styles';
import CustomText from '../components/Text';
import CustomView from '../components/CustomView';
import I18n from '../i18n';
import TouchableImage from '../components/TouchableImage';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';



export default function CategoryScreen() {

    

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const foreignTitle = I18n.t('foreign');
    const headlinesTitle = I18n.t('headlines');
    const businessTitle = I18n.t('business');
    const sportTitle = I18n.t('sport');
    const healthTittle = I18n.t('health');
    const technologyTitle = I18n.t('technology');
    const scienceTitle = I18n.t('science');
    const magazineTitle = I18n.t('magazine');
    

    const sportImageUrl = 'https://www.ybisletmeistirakler.com/wp-content/uploads/HACI-SABANCI-YUZME-HAVUZU5.jpg';
    const technologyImageUrl = 'https://imgs.platinonline.com/Documents/Platin/images/2018/10/12/e76106d012272018.jpg';
    const headlinesImageUrl = 'https://istanbultourstudio.s3.amazonaws.com/uploads/sight/cover_photo/64/istiklal-avenue5.jpg';
    const economyImageUrl = 'https://media.foxbusiness.com/BrightCove/854081161001/202009/1999/854081161001_6195329950001_6195330866001-vs.jpg'
    const healthImageUrl = 'https://www.hhhc.org/wp-content/uploads/2020/03/iStock-639896942.jpg';
    const magazineImageUrl = 'https://i.sozcu.com.tr/wp-content/uploads/2021/06/28/iecrop/somnio_16_9_1624861997.jpg';
    const scienceImageUrl = 'https://iyikigormusum.com/uploads/a39a8e98fbe02269c267a34dc7b5a3ba.jpeg';
    const foreignImageUrl = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_23/3382051/200606-washington-demonstration-al-1549.jpg';



    return (

        <CustomView style={styles.categoriesContainer}>
        <Header title={I18n.t('categories')} />

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <TouchableImage
                        source={{uri:headlinesImageUrl}}
                        style={styles.categoriesİmage}
                        onPress={() =>  navigation.navigate('Headlines')}
                        
                    />
                    <CustomText style={styles.textTitle} text={headlinesTitle} />
                </View>

                <View style={styles.imageMetaView}>
                    <TouchableImage
                        source={{uri:sportImageUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Everything', {category : 'sport'})}
                    />
                    <CustomText style={styles.textTitle} text={sportTitle}/>
                </View>
            </View>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <TouchableImage
                        source={{uri:technologyImageUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Everything', {category : 'technology'})}
                    />
                    <CustomText style={styles.textTitle} text={technologyTitle}/>
                </View>

                <View style={styles.imageMetaView}>
                    <TouchableImage
                        source={{uri:healthImageUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Everything', {category : 'health'})}
                    />
                    <CustomText style={styles.textTitle} text={healthTittle}/>
                </View>
            </View>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <TouchableImage
                        source={{uri:economyImageUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Everything', {category : 'business'})}
                    />
                    <CustomText style={styles.textTitle} text={businessTitle}/>
                </View>

                <View style={styles.imageMetaView}>
                    <TouchableImage
                        source={{uri:magazineImageUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Everything', {category : 'entertainment'})}
                    />
                    <CustomText style={styles.textTitle} text={magazineTitle}/>
                </View>
            </View>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <TouchableImage
                        source={{uri:scienceImageUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Everything', {category : 'science'})}
                    />
                    <CustomText style={styles.textTitle} text={scienceTitle}/>
                </View>

                <View style={styles.imageMetaView}>
                    <TouchableImage
                        source={{uri:foreignImageUrl}}
                        style={styles.categoriesİmage}
                        onPress={()=> navigation.navigate('Foreign')}
                    />
                    <CustomText style={styles.textTitle} text={foreignTitle}/>
                </View>
            </View>

        </ScrollView>
            

            




        </CustomView>
    )
}
