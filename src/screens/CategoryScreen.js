import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Header from '../components/Header'
import { fonts, colors } from '../constants';
import styles from './styles';
import CustomText from '../components/Text';
import CustomView from '../components/CustomView';
import I18n from '../i18n';

export default function CategoryScreen() {

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
        <Header title={'Kategoriler'}/>

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <Image
                        source={{uri:headlinesImageUrl}}
                        style={styles.categoriesİmage}
                    />
                    <CustomText style={styles.textTitle} text={I18n.t('headlines')} />
                </View>

                <View style={styles.imageMetaView}>
                    <Image
                        source={{uri:sportImageUrl}}
                        style={styles.categoriesİmage}
                    />
                    <CustomText style={styles.textTitle} text={I18n.t('sport')}/>
                </View>
            </View>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <Image
                        source={{uri:technologyImageUrl}}
                        style={styles.categoriesİmage}
                    />
                    <CustomText style={styles.textTitle} text={I18n.t('technology')}/>
                </View>

                <View style={styles.imageMetaView}>
                    <Image
                        source={{uri:healthImageUrl}}
                        style={styles.categoriesİmage}
                    />
                    <CustomText style={styles.textTitle} text={I18n.t('health')}/>
                </View>
            </View>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <Image
                        source={{uri:economyImageUrl}}
                        style={styles.categoriesİmage}
                    />
                    <CustomText style={styles.textTitle} text={I18n.t('business')}/>
                </View>

                <View style={styles.imageMetaView}>
                    <Image
                        source={{uri:magazineImageUrl}}
                        style={styles.categoriesİmage}
                    />
                    <CustomText style={styles.textTitle} text={I18n.t('magazine')}/>
                </View>
            </View>

            <View style={styles.imageViewRow}>
                <View style={{alignItems:'center'}}>
                    <Image
                        source={{uri:scienceImageUrl}}
                        style={styles.categoriesİmage}
                    />
                    <CustomText style={styles.textTitle} text={I18n.t('science')}/>
                </View>

                <View style={styles.imageMetaView}>
                    <Image
                        source={{uri:foreignImageUrl}}
                        style={styles.categoriesİmage}
                    />
                    <CustomText style={styles.textTitle} text={I18n.t('foreign')}/>
                </View>
            </View>

        </ScrollView>
            

            




        </CustomView>
    )
}
