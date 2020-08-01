import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatItem = props => {
    return (
        <TouchableOpacity onPress={props.chatCaller} key={props.id} style={{ paddingHorizontal: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row-reverse', paddingVertical: 10 }}>
            <View style={{ width: '15%' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
            </View>
            <View style={{ width: '72%', justifyContent: 'center', paddingRight: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>رضا گلزار</Text>
                <Text numberOfLines={1}>سامان عزیز این پیام از سمت برادر ارزشی آقای رضا گلزار ارسال می شود</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 10 }}>
                <Text style={{ fontSize: 10, paddingBottom: 10 }}>28 Jul</Text>
                {
                    Math.floor(Math.random() * 2) > 0 && (
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 20, height: 20, borderRadius: 10, backgroundColor: 'tomato' }}><Text style={{ alignItems: 'center' }}>{Math.ceil(Math.random() * 9)}</Text></TouchableOpacity>
                    )
                }
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

export default ChatItem;