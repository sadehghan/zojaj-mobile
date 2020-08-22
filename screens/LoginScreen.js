import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = props => {
    console.log("login");
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: 20, paddingTop: 30, width: '100%', height: 200 }}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    Sign In
                </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: 20, paddingTop: 30, width: '100%', height: 300 }}>
                <TextInput style={{ margin: 20, padding: 20 }} placeholder={'username'} />
                <TextInput style={{ margin: 20, padding: 20 }} placeholder={'password'} />
                <TouchableOpacity style={{ backgroundColor: 'darkgrey' }}>
                    <Text style={{ color: 'white' }}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'white',
    },
});

export default LoginScreen;