import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

const MailScreen = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ paddingTop: 18, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} style={styles.image}>
                    <View style={{ padding: 10, width: '80%' }}>
                        <Text style={{color: 'white', fontSize: 15}}>Charles P.Smith</Text>
                        <Text style={styles.text}>Actionable solution to support the mental health of US veterans</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{color: 'white', fontSize: 10}}>12:33</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingTop: 18, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} style={styles.image}>
                    <View style={{ padding: 10, width: '80%' }}>
                        <Text style={{color: 'white', fontSize: 15}}>Charles P.Smith</Text>
                        <Text style={styles.text}>Actionable solution to support the mental health of US veterans</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{color: 'white', fontSize: 10}}>12:34</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    image: {
        resizeMode: "cover",
        width: '100%',
        height: 300,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        borderRadius: 10,
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default MailScreen;