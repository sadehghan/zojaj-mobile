import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import FeedInfo from './FeedInfo';

const FeedItem = props => {
    return (
        <View key={props.id}>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 7, paddingHorizontal: 15 }}>
                <View style={{ flexDirection: 'row-reverse', justifyContent: "space-between", alignItems: 'center' }}>
                    <Image style={{ width: 30, height: 30, borderRadius: 15 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                    <Text style={{ paddingHorizontal: 8, fontWeight: 'bold' }}>{props.dataType}</Text>
                </View>
                <TouchableOpacity><Text style={{ paddingHorizontal: 4, fontWeight: 'bold' }}>...</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={props.modalCaller}>
                    <Image
                        source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }}
                        style={{ resizeMode: 'stretch', width: '100%', height: 275 }}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ paddingHorizontal: 15, flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 7, paddingHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row-reverse', justifyContent: "space-between", alignItems: 'center' }}>
                        <TouchableOpacity style={{ paddingLeft: 20 }}><Ionicons name={'ios-heart-empty'} size={30} color={'black'} /></TouchableOpacity>
                        <TouchableOpacity onPress={props.modalCaller}><Ionicons name={'md-list'} size={30} color={'black'} /></TouchableOpacity>
                        <TouchableOpacity style={{ paddingRight: 20 }}><Ionicons name={'md-paper-plane'} size={30} color={'black'} /></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ paddingRight: 20 }}><Ionicons name={'ios-star-outline'} size={30} color={'black'} /></TouchableOpacity>
                </View>
                <FeedInfo modalCaller={props.modalCaller} />
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

export default FeedItem;