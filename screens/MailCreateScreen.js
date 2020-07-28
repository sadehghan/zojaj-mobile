import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const MailCreateScreen = props => {
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderColor: 'lightgrey', height: 50, }}>
                    <Text style={{ width: '15%', fontWeight: 'bold', color: 'grey' }}>From</Text>
                    <Text style={{ fontSize: 20, }}>Saman Dehghan</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderColor: 'lightgrey', height: 50, }}>
                    <Text style={{ width: '15%', fontWeight: 'bold', color: 'grey' }}>To</Text>
                    <TextInput placeholder={'destination'} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderColor: 'lightgrey', height: 50, }}>
                    <TextInput placeholder={'Subject'} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
                    <TextInput multiline={true} placeholder={'Compose email'} />
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