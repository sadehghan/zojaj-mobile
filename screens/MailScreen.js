import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MailItem from '../components/MailItem';
import TabInnerScreen from '../components/TabInnerScreen';
import { fetchMails } from '../components/Connections';

function TabInnerScreenWrapper({ route, navigation }) {
    const { itemId } = route.params;

    const ApiRequest = async thePage => {
        const LIMIT = 10;
        result = await fetchMails(itemId, thePage, LIMIT);
        return result;
    };

    const callHandler = () => {
        navigation.navigate('MailDetails');
    };

    const renderItem = ({ item }) => {
        console.log(item.logo, item.image);

        return (
            <MailItem
                id={item.mailId}
                modalCaller={callHandler}
                logo={item.logo}
                from={item.from}
                title={item.title}
                text={item.text}
                date={item.date}
            />
        );
    };

    return (
        <TabInnerScreen render={renderItem} apiRequest={ApiRequest} />
    );
}

const MailScreen = props => {
    const Tab = createMaterialTopTabNavigator();

    const callCreateMailHandler = () => {
        props.navigation.navigate('MailCreate');
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '9%', paddingTop: 30, backgroundColor: 'white', paddingHorizontal: 30, }}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
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