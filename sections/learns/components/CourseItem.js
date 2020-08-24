import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CourseItem = props => {
    return (
        <View key={props.id} style={{ backgroundColor: 'white', borderColor: 'lightgrey', borderBottomWidth: 0.5, marginBottom: 10 }}>

            <View>
                <TouchableOpacity style={{ margin: 20, borderRadius: 10 }} onPress={props.modalCaller}>
                    <Image
                        source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }}
                        style={{ resizeMode: 'cover', width: '100%', height: 200 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: 20,paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row-reverse', alignItems: 'center', paddingHorizontal: 20 }}>
                    <Ionicons name={'md-bulb'} size={15} color={'black'} />
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, paddingHorizontal: 10 }}>آشنایی مقدماتی با مهدویت</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', alignItems: 'center', paddingHorizontal: 20 }}>
                    <Ionicons name={'md-person'} size={15} color={'black'} />
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, paddingHorizontal: 10 }}>استاد رضا غفاری</Text>
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

export default CourseItem;