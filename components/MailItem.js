import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MailItem = props => {
    return (
        <TouchableOpacity onPress={props.modalCaller} key={props.id} style={{ paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row-reverse', paddingVertical: 10 }}>
            <View style={{ width: '15%', paddingHorizontal: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: props.logo }} />
            </View>
            <View style={{ width: '75%' }}>
                <Text style={{ fontWeight: 'bold' }}>props.from</Text>
                <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>props.title</Text>
                <Text numberOfLines={1}>props.text</Text>
            </View>
            <View style={{ alignItems: 'center', paddingRight: 10 }}>
                <Text style={{ fontSize: 10 }}>props.date</Text>
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