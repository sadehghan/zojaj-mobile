import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ACCESS_TOKEN_KEY } from '../../auth/constants/StorageConstants';

const MailDetails = props => {
    const access_token = getToken(ACCESS_TOKEN_KEY);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ paddingVertical: 20, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", width: '100%' }}>
                    <Text style={{ width: '90%', fontSize: 22, fontWeight: 'bold' }}>{props.route.params.title}</Text>
                    <TouchableOpacity style={{ paddingTop: 10 }}><Ionicons name={'ios-star-outline'} size={22} color={'black'} /></TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 15, flexDirection: 'row-reverse', alignItems: 'center' }}>
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 25 }}
                        source={{ uri: SERVER_ADDRESS + 'files/users/avatars/' + props.route.params.from, headers: { Authorization: 'Bearer ' + access_token } }}
                    />
                    <View style={{ paddingHorizontal: 15, flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ paddingHorizontal: 5, fontSize: 18, fontWeight: 'bold' }}>{props.from} </Text>
                        <Text style={{ fontSize: 10, color: 'grey' }}>{props.route.params.date}</Text>
                    </View>
                    <TouchableOpacity style={{ paddingRight: 50, paddingLeft: 20 }}><Ionicons name={'md-return-right'} size={30} color={'black'} /></TouchableOpacity>
                    <TouchableOpacity ><Ionicons name={'md-return-left'} size={30} color={'black'} /></TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Text>{props.route.params.text}</Text>
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