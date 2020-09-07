import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { SERVER_ADDRESS } from '../../../constants/ServerConstants';
import { getToken, getUserInfo } from '../../auth/components/UserConnections';
import { ACCESS_TOKEN_KEY } from '../../auth/constants/StorageConstants';

const MailItem = props => {
    const important = props.isImportant ? 'ios-star' : 'ios-star-outline';
    const isReadStyle = props.isRead ? { color: 'grey' } : { fontWeight: 'bold' };
    const access_token = getToken(ACCESS_TOKEN_KEY);

    return (
        <TouchableOpacity onPress={() => props.modalCaller(props.title, props.from, props.text, props.date)} key={props.id} style={{ paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row-reverse', paddingVertical: 10 }}>
            <View style={{ width: '15%', paddingHorizontal: 10 }}>
                <Image
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={{ uri: SERVER_ADDRESS + 'files/users/avatars/' + props.from, headers: { Authorization: 'Bearer ' + access_token } }}
                />
            </View>
            <View style={{ width: '75%' }}>
                <Text style={isReadStyle}>جعفری</Text>
                <Text style={isReadStyle} numberOfLines={1}>{props.title}</Text>
                <Text numberOfLines={1} style={isReadStyle}>{props.text}</Text>
            </View>
            <View style={{ alignItems: 'center', paddingRight: 10 }}>
                <Text style={{ fontSize: 10 }}>۵ روز قبل</Text>
                <TouchableOpacity style={{ paddingTop: 10 }}><Ionicons name={important} size={20} color={'black'} /></TouchableOpacity>
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