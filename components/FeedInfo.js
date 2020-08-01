import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeedInfo = props => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <Text style={{ fontWeight: 'bold' }}>{Math.floor(Math.random() * 1000 + 1)} نفر پسندیدند</Text>
            </View>
            <View style={{ paddingVertical: 5, flexDirection: 'row-reverse', alignItems: 'center' }}>
                <Text numberOfLines={2}>بازتاب بیانات رهبر معظم انقلاب در رسانه‌های عربی  </Text>
                {/* <TouchableOpacity><Text style={{ fontSize: 10, color: 'grey' }}>... more</Text></TouchableOpacity> */}
            </View>
            <TouchableOpacity onPress={props.modalCaller}><Text style={{ color: 'grey' }}>مشاهده تمام {Math.floor(Math.random() * 100 + 1)} نظر</Text></TouchableOpacity>
            <View style={{ flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: '90%', flexDirection: 'row-reverse', alignItems: 'center' }}>
                    <TouchableOpacity><Text style={{ fontWeight: 'bold' }}>احسان</Text></TouchableOpacity>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{  }}> یافتن حقیقت و دروغ در این شرایط گرگ و میش بسیار سخت است</Text>
                    {/* <TouchableOpacity><Text style={{ fontSize: 10, color: 'grey' }}>... more</Text></TouchableOpacity> */}
                </View>
                {/* <TouchableOpacity style={{ paddingright: 20 }}><Ionicons name={'ios-heart-empty'} size={14} color={'grey'} /></TouchableOpacity> */}
            </View>
            <View style={{flexDirection: 'row-reverse'}}>
                <TouchableOpacity style={{ paddingTop: 10 }}><Text style={{ fontSize: 10, color: 'grey' }}>۵۰ دقیقه قبل</Text></TouchableOpacity>
            </View>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FeedInfo;