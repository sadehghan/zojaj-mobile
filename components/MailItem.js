import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MailItem = props => {
    return (
        <TouchableOpacity onPress={props.modalCaller} key={props.id} style={{ paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row-reverse', paddingVertical: 10 }}>
            <View style={{ width: '15%', paddingHorizontal: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
            </View>
            <View style={{ width: '75%' }}>
                <Text style={{ fontWeight: 'bold' }}>ستاد بررسی شرایط</Text>
                <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>۳۵ گزارش دریافتی از ستاد اجرای فرمان امام که لازم الجرا</Text>
                <Text numberOfLines={1}>سامان عزیز سلام در محتوای این اعلان وضعیت به صورت شدید</Text>
            </View>
            <View style={{ alignItems: 'center', paddingRight: 10 }}>
                <Text style={{ fontSize: 10 }}>29 Jul</Text>
                <TouchableOpacity style={{ paddingTop: 10 }}><Ionicons name={'ios-star-outline'} size={20} color={'black'} /></TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MailItem;