import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const LearnScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Learn Screen...!</Text>
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

export default LearnScreen;