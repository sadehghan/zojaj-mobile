import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const MailCreateScreen = props => {
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row-reverse', alignItems: 'center', borderBottomWidth: 0.5, borderColor: 'lightgrey', height: 50, }}>
                    <Text style={{ width: '15%', fontWeight: 'bold', color: 'grey' }}>از</Text>
                    <Text style={{ fontSize: 20, }}>سامان دهقان</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', alignItems: 'center', borderBottomWidth: 0.5, borderColor: 'lightgrey', height: 50, }}>
                    <Text style={{ width: '15%', fontWeight: 'bold', color: 'grey' }}>به</Text>
                    <TextInput placeholder={'مقصد'} />
                </View>
                <View style={{ flexDirection: 'row-reverse', alignItems: 'center', borderBottomWidth: 0.5, borderColor: 'lightgrey', height: 50, }}>
                    <TextInput placeholder={'موضوع'} />
                </View>
                <View style={{ flexDirection: 'row-reverse', alignItems: 'center', paddingVertical: 10}}>
                    <TextInput multiline={true} placeholder={'متن نامه'} />
                </View>
            </View>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default MailCreateScreen;