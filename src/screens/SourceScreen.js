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



export default function SourceScreen() {

    //Haber kaynağı listeleme ekranı

    const navigation = useNavigation();



    const sozcuUrl = 'https://seeklogo.com/images/S/sozcu-gazetesi-logo-BF2AAAABF4-seeklogo.com.png';
    const haberturkUrl = 'https://play-lh.googleusercontent.com/RHV4WLdQNalCG87rSH5Q60ZDEnHMg1_Az679Dg6DglSinOxdyD3W80VLpn7SlSjd1Q';
    const hurriyetUrl = 'https://www.leventekinci.com/wp-content/uploads/2020/04/hurriyet-gazetesi-logo-1.png';
    const ntvUrl = 'https://play-lh.googleusercontent.com/GLgkGs-aJqsuPTnB3h2gRyFDIzMXCDRyZ6bP7MBqeDJgHu6WuuAH0RWGX7ztajpZGw'
    const cumhuriyetUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrxkJ9G4yB9FzaoPzwfpV_qqHHVBCgwhhMw&usqp=CAU';
    const haber7Url = 'https://i12.haber7.net/assets/v2/common/images/thumbs/meta-logo.jpg';
    const fotomacUrl = 'https://ia.tmgrup.com.tr/2adee0/240/240/0/0/1020/1020?u=https://i.tmgrup.com.tr/724dinle/2021/02/03/1612355209990.png';
    const milliyetUrl = 'https://logowik.com/content/uploads/images/332_milliyet.jpg';



    return (

        <CustomView style={styles.categoriesContainer}>
        <Header title={I18n.t('sources')} />

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <TouchableImage
                        source={{uri:sozcuUrl}}
                        style={styles.categoriesİmage}
                        onPress={() =>  navigation.navigate('Sourcenews',{domain:'sozcu.com.tr'})}
                        
                    />
                </View>

                <View style={styles.imageMetaView}>
                    <TouchableImage
                        source={{uri:haberturkUrl}}
                        style={styles.categoriesİmage}
                        onPress={() =>  navigation.navigate('Sourcenews',{domain:'haberturk.com'})}
                    />
                </View>
            </View>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <TouchableImage
                        source={{uri:hurriyetUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Sourcenews',{domain:'hurriyet.com.tr'})}
                    />
                </View>

                <View style={styles.imageMetaView}>
                    <TouchableImage
                        source={{uri:ntvUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Sourcenews',{domain:'ntv.com.tr'})}
                    />
                </View>
            </View>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <TouchableImage
                        source={{uri:cumhuriyetUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Sourcenews',{domain:'Sabah.com'})}
                    />
                </View>

                <View style={styles.imageMetaView}>
                    <TouchableImage
                        source={{uri:haber7Url}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Sourcenews',{domain:'Haber7.com.tr'})}
                    />
                </View>
            </View>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <TouchableImage
                        source={{uri:fotomacUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Sourcenews',{domain:'fotomac.com.tr'})}
                    />
                </View>

                <View style={styles.imageMetaView}>
                    <TouchableImage
                        source={{uri:milliyetUrl}}
                        style={styles.categoriesİmage}
                        onPress={() => navigation.navigate('Sourcenews',{domain:'milliyet.com'})}
                    />
                </View>
            </View>

        </ScrollView>
            

            




        </CustomView>
    )
}
