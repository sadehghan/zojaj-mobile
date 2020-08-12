import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatItem from '../components/ChatItem';
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
        navigation.navigate('ChatContent', { itemId: 77 });
    };

    return (
        <TabInnerScreen itemId={itemId} callHandler={callHandler} listItem={ChatItem} apiRequest={ApiRequest} />
    );
}

const ChatScreen = props => {
    const Tab = createMaterialTopTabNavigator();

    const callCreateChatHandler = () => {
        console.log('Create chat');
        props.navigation.navigate('ChatCreate');
    };

    const callProfileHandler = () => {
        //props.navigation.navigate('MailDetails');
        console.log('Profile');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity style={{ width: '80%' }} onPress={callProfileHandler}></TouchableOpacity>
                <TouchableOpacity onPress={callCreateChatHandler}><Ionicons name={'md-add'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
                lazy={true}
                initialRouteName="کانال"
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
                <Tab.Screen name="گفتگو" component={TabInnerScreenWrapper} initialParams={{ itemId: 'Chat' }} />
                <Tab.Screen name="گروه" component={TabInnerScreenWrapper} initialParams={{ itemId: 'Group' }} />
                <Tab.Screen name="کانال" component={TabInnerScreenWrapper} initialParams={{ itemId: 'Chanel' }} />
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

export default ChatScreen;