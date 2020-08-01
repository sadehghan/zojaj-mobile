import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { LONG_TEXT } from '../constants/TextConstants';

const MailDetails = props => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{paddingVertical: 20, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", width: '100%' }}>
                    <Text style={{ width: '90%', fontSize: 22, fontWeight: 'bold' }}>بازتاب بیانات رهبر معظم انقلاب در رسانه‌های عربی</Text>
                    <TouchableOpacity style={{ paddingTop: 10 }}><Ionicons name={'ios-star-outline'} size={22} color={'black'} /></TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 15, flexDirection: 'row-reverse', alignItems: 'center' }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                    <View style={{ paddingHorizontal: 15, flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ paddingHorizontal: 5, fontSize: 18, fontWeight: 'bold' }}>ستاد </Text>
                        <Text style={{ fontSize: 10, color: 'grey' }}>4 days ago</Text>
                    </View>
                    <TouchableOpacity style={{ paddingRight: 50, paddingLeft: 20 }}><Ionicons name={'md-return-right'} size={30} color={'black'} /></TouchableOpacity>
                    <TouchableOpacity ><Ionicons name={'md-return-left'} size={30} color={'black'} /></TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 20,  paddingVertical: 10 }}>
                    <Text>{LONG_TEXT + LONG_TEXT}</Text>
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

export default MailDetails;