import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function OneScreen({ route, navigation }) {
    const { itemId } = route.params;
    return (
        <View style={styles.container}>
            <Text>ITEM ID: {JSON.stringify(itemId)}</Text>
        </View>
    );
}

const LearnScreen = props => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Sama</Text>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="One" component={OneScreen} initialParams={{ itemId: 11 }} />
                <Tab.Screen name="Two" component={OneScreen} initialParams={{ itemId: 99 }} />
            </Tab.Navigator>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: '8%',
        paddingTop: 30,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
});

export default LearnScreen;