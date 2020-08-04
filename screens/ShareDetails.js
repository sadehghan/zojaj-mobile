import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { LONG_TEXT } from '../constants/TextConstants';

const ShareDetails = props => {
    const data = [1, 2, 3, 4, 5];

    let comments = [];
    for (let i = 0; i < 6; i++) {
        comments.push(
            <View style={{paddingVertical: 20, flexDirection:'row-reverse', borderBottomWidth: 0.5, borderColor: 'lightgrey'}}>
                <View style={{alignItems: 'center'}}>
                    <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                </View>
                <View style={{paddingHorizontal: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>رضا قدوسی</Text>
                    <Text style={{paddingVertical: 10, fontSize: 12}}>خیلی زیباست خسته نباشید</Text>
                    <Text style={{fontSize: 8, color: 'lightgrey'}}>۱۰ ساعت قبل</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ paddingVertical: 10, flexDirection: 'row-reverse', justifyContent: "space-between", alignItems: 'center' }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                    <View style={{ paddingHorizontal: 10, }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{'سامان دهقان'}</Text>
                        </View>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <Text style={{ fontSize: 10, paddingLeft: 20, fontWeight: 'bold', color: 'cornflowerblue' }}>{'راهپیمایی رنگ ها'}</Text>
                            <View style={{ width: '55%' }}></View>
                            <Text style={{ fontWeight: 'bold', fontSize: 10, color: 'darkgrey' }}>۲۲ شهریور</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }}
                            style={{ resizeMode: 'cover', width: '100%', height: 375 }}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15 }}>
                        <Ionicons name={'md-attach'} size={30} color={'black'} />
                        <Text style={{ paddingHorizontal: 20, fontSize: 20, fontWeight: 'bold' }}>۵ پیوست</Text>
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <FlatList
                            horizontal={true}
                            data={data}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 5 }}>
                                    <Image
                                        source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }}
                                        style={{ resizeMode: 'stretch', width: 80, height: 60, borderRadius: 10 }}
                                    />
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item}
                        />
                    </View>
                </View>
                <View style={{ paddingVertical: 10, paddingHorizontal: 2, borderColor: 'lightgrey', borderWidth: 0.8 }}>
                    <View style={{ flexDirection: 'row-reverse', justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', paddingHorizontal: 10 }}>۱۵۰۰</Text>
                            <Ionicons name={'md-heart'} size={25} color={'black'} />
                        </View>
                        <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', paddingHorizontal: 10 }}>۵۴</Text>
                            <Ionicons name={'md-text'} size={25} color={'black'} />
                        </View>
                        <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 50 }}>
                            <Ionicons name={'md-share'} size={25} color={'black'} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row-reverse', paddingVertical: 20, paddingHorizontal: 10, borderBottomWidth: 0.9, borderColor: 'lightgrey' }}>
                    <Text>   با توجه به نیاز به ایجاد بستری برای توسعه پوستر این پوستر برای مراسم عید قربان طراحی و تولید شده است. تمام </Text>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 20, backgroundColor: 'whitesmoke' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>۶ نظر</Text>
                    {comments}
                </View>
            </ScrollView>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default ShareDetails;