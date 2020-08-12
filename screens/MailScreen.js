import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MailItem from '../components/MailItem';
import TabInnerScreen from '../components/TabInnerScreen';

import { FEED_LIST } from '../constants/DataBaseConstants';

function TabInnerScreenWrapper({ route, navigation }) {
    const { itemId } = route.params;

    const ApiRequest = async thePage => {
        const LIMIT = 10;
        await setTimeout(() => { }, 1500);
        return FEED_LIST.slice((thePage - 1) * LIMIT, thePage * LIMIT);
    };

    const callHandler = () => {
        navigation.navigate('MailDetails');
    };

    return (
        <TabInnerScreen itemId={itemId} callHandler={callHandler} listItem={MailItem} apiRequest={ApiRequest} />
    );
}

const MailScreen = props => {
    const Tab = createMaterialTopTabNavigator();

    const callCreateMailHandler = () => {
        props.navigation.navigate('MailCreate');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity style={{ width: '80%' }}></TouchableOpacity>
                <TouchableOpacity onPress={callCreateMailHandler}><Ionicons name={'md-add'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
                lazy={true}
                initialRouteName="نخوانده"
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'darkgrey',
                    indicatorStyle: {
                        backgroundColor: 'black'
                    },
                    labelStyle: {
                        fontWeight: 'bold',
                        fontSize: 10,
                    },
                }}
            >
                <Tab.Screen name="همه" component={TabInnerScreenWrapper} initialParams={{ itemId: 'All' }} />
                <Tab.Screen name="ارسالی" component={TabInnerScreenWrapper} initialParams={{ itemId: 'Sent' }} />
                <Tab.Screen name="مهم" component={TabInnerScreenWrapper} initialParams={{ itemId: 'Important' }} />
                <Tab.Screen name="نخوانده" component={TabInnerScreenWrapper} initialParams={{ itemId: 'Unread' }} />
            </Tab.Navigator>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: '9%',
        paddingTop: 30,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
});

export default MailScreen;