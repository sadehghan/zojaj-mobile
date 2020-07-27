import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MailItem = props => {
    return (
        <View key={props.id} style={{paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingVertical: 10 }}>
            <View style={{width: '20%'}}>
                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
            </View>
            <View style={{width: '70%'}}>
                <Text style={{fontWeight: 'bold'}}>Jobinja.ir</Text>
                <Text style={{fontWeight: 'bold'}} numberOfLines={1}>35 Latest Job Opportunities from IranTa...</Text>
                <Text numberOfLines={1}>Dear Saman, our system has identified t...</Text>
            </View>
            <View>
                <Text style={{fontSize: 10}}>29 Jul</Text>
                <Text>STAR</Text>
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

export default MailItem;