import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CourseItem = props => {
    return (
        <View key={props.id}>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 7, paddingHorizontal: 15 }}>
                <View style={{ flexDirection: 'row-reverse', justifyContent: "space-between", alignItems: 'center' }}>
                    <Image style={{ width: 30, height: 30, borderRadius: 15 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                    <Text style={{ paddingHorizontal: 8, fontWeight: 'bold' }}>{props.dataType}</Text>
                </View>
                <TouchableOpacity><Text style={{ paddingHorizontal: 4, fontWeight: 'bold' }}>...</Text></TouchableOpacity>
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