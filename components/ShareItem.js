import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShareItem = props => {
    return (
        <View key={props.id} style={{ backgroundColor: 'white', borderColor: 'lightgrey', borderBottomWidth: 0.5, marginBottom: 5 }}>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 7, paddingHorizontal: 15 }}>
                <View style={{ paddingVertical: 5, flexDirection: 'row-reverse', justifyContent: "space-between", alignItems: 'center' }}>
                    <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                    <View style={{ paddingHorizontal: 10, }}>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>{'سامان دهقان'}</Text>
                        </View>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <Text style={{ fontSize: 10, paddingLeft: 20, fontWeight: 'bold', color: 'cornflowerblue' }}>{'راهپیمایی رنگ ها'}</Text>
                            <View style={{ width: '55%' }}></View>
                            <Text style={{ fontSize: 10, color: 'darkgrey' }}>۲۲ شهریور</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={props.modalCaller}>
                    <Image
                        source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }}
                        style={{ resizeMode: 'cover', width: '100%', height: 375 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row-reverse', justifyContent: "center", alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', paddingHorizontal: 10 }}>۱۵۰۰</Text>
                    <Ionicons name={'md-heart'} size={20} color={'black'} />
                </View>
                <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', paddingHorizontal: 10 }}>۵۴</Text>
                    <Ionicons name={'md-text'} size={20} color={'black'} />
                </View>
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

export default ShareItem;