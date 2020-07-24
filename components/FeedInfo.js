import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeedInfo = props => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{Math.floor(Math.random() * 1000 + 1)} likes</Text>
            <View style={{ paddingVertical: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Text>Find the latest breaking news and  </Text>
                <TouchableOpacity><Text style={{ fontSize: 10, color: 'grey' }}>... more</Text></TouchableOpacity>
            </View>
            <TouchableOpacity><Text style={{ color: 'grey' }}>View all 3 comments</Text></TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity><Text style={{ fontWeight: 'bold' }}>Ehsan</Text></TouchableOpacity>
                    <Text style={{ paddingHorizontal: 5 }}>That is true, How was it ?</Text>
                    <TouchableOpacity><Text style={{ fontSize: 10, color: 'grey' }}>... more</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={{ paddingright: 20 }}><Ionicons name={'ios-heart-empty'} size={14} color={'grey'} /></TouchableOpacity>
            </View>
            <TouchableOpacity style={{ paddingTop: 5 }}><Text style={{ fontSize: 10, color: 'grey' }}>50 MINUTES AGO</Text></TouchableOpacity>
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