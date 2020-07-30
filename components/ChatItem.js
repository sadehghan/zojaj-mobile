import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatItem = props => {
    return (
        <TouchableOpacity onPress={props.chatCaller} key={props.id} style={{ paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingVertical: 10 }}>
            <View style={{ width: '20%' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
            </View>
            <View style={{ width: '70%', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>Jobinja.ir</Text>
                <Text numberOfLines={1}>Dear Saman, our system has identified t...</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
                <Text style={{ fontSize: 10, paddingBottom: 10}}>28 Jul</Text>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 20, height: 20, borderRadius: 10, backgroundColor: 'tomato'}}><Text style={{alignItems: 'center'}}>1</Text></TouchableOpacity>
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