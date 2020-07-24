import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MailScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Mail Screen...!</Text>
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

export default MailScreen;