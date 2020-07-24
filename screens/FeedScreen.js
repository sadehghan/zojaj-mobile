import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const FeedScreen = props => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Settings"
                onPress={() => props.navigation.navigate('Settings')}
            />
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

export default FeedScreen;