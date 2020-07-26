import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const FeedDetails = props => {
    return (
        <View style={styles.container}>
            <View style={styles.commentInput}>
                <View style={{ paddingHorizontal: 20, backgroundColor: 'white', width: '95%', height: '80%', borderRadius: 15, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <TextInput placeholder={'Add a Commeent ...'} style={{}}></TextInput>
                    <TouchableOpacity>
                        <Text style={{ color: 'blue' }}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{}}>
                <View style={{ width: '100%', flexDirection: 'row', paddingRight: 95, paddingVertical: 20, borderColor: 'lightgrey', borderBottomWidth: 0.5 }}>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>FarsNews</Text>
                    <Text style={{}}>Give the keyboard and the system information about the expected semantic meaning for the content that users enter.
                    For iOS 11+ you can set textContentType to username or password to enable autofill of login details from the device keychain.
                    For iOS 12+ newPassword can be used to indicate a new password input the user may want to save in the keychain, and oneTimeCode
                    can be used to indicate that a field can be autofilled by a code arriving in an SMS.
                    When using textContentType as newPassword on iOS we can let the OS know the minimum requirements of the password so that it can generate one that will satisfy them.
                    In order to create a valid string for PasswordRules take a look to the Apple Docs.
                    For iOS 11+ you can set textContentType to username or password to enable autofill of login details from the device keychain.
                    For iOS 12+ newPassword can be used to indicate a new password input the user may want to save in the keychain, and oneTimeCode
                    can be used to indicate that a field can be autofilled by a code arriving in an SMS.
                    When using textContentType as newPassword on iOS we can let the OS know the minimum requirements of the password so that it can generate one that will satisfy them.
                    In order to create a valid string for PasswordRules take a look to the Apple Docs.
                    </Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingRight: 95, paddingVertical: 20, borderColor: 'lightgrey', borderBottomWidth: 0.5 }}>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>Nader</Text>
                    <Text>Wow beautiful !!!</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingRight: 95, paddingVertical: 20, borderColor: 'lightgrey', borderBottomWidth: 0.5 }}>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>Nader</Text>
                    <Text>Wow beautiful !!!</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingRight: 95, paddingVertical: 20, borderColor: 'lightgrey', borderBottomWidth: 0.5 }}>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>Nader</Text>
                    <Text>Wow beautiful !!!</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingRight: 95, paddingVertical: 20, borderColor: 'lightgrey', borderBottomWidth: 0.5 }}>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>Nader</Text>
                    <Text>Wow beautiful !!!</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingRight: 95, paddingVertical: 20, borderColor: 'lightgrey', borderBottomWidth: 0.5 }}>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>Nader</Text>
                    <Text>Wow beautiful !!!</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingRight: 95, paddingVertical: 20, borderColor: 'lightgrey', borderBottomWidth: 0.5 }}>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>Nader</Text>
                    <Text>Wow beautiful !!!</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingRight: 95, paddingVertical: 20, borderColor: 'lightgrey', borderBottomWidth: 0.5 }}>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>Nader</Text>
                    <Text>Wow beautiful !!!</Text>
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
    header: {
        height: 60,
        paddingTop: 30,
        backgroundColor: 'white',
        borderColor: 'darkgrey',
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    commentInput: {
        height: 60,
        // paddingTop: 30,
        backgroundColor: 'white',
        borderColor: 'darkgrey',
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: 'lightgrey'
    }
});

export default FeedDetails;