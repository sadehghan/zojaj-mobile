import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FeedItem from '../components/FeedItem';
import TabInnerScreen from '../components/TabInnerScreen';

import { FEED_LIST } from '../constants/DataBaseConstants';

function TabInnerScreenWrapper({ route, navigation }) {
    const { itemId } = route.params;

    const ApiRequest = async thePage => {
        const LIMIT = 5;
        await setTimeout(() => { }, 1500);
        return FEED_LIST.slice((thePage - 1) * LIMIT, thePage * LIMIT);
    };

    const callHandler = () => {
        navigation.navigate('FeedDetails');
    };

    return (
        <TabInnerScreen itemId={itemId} callHandler={callHandler} listItem={FeedItem} apiRequest={ApiRequest}/>
    );
}

const FeedScreen = props => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity style={{ width: '80%' }}></TouchableOpacity>
                <TouchableOpacity><Ionicons name={'ios-recording'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
                lazy={true}
                initialRouteName="برترین ها"
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'darkgrey',
                    indicatorStyle: {
                        backgroundColor: 'black'
                    },
                    labelStyle: {
                        fontWeight: 'bold',
                        fontSize: 10
                    },
                }}
            >
                <Tab.Screen name="خبرگزاری" component={TabInnerScreenWrapper} initialParams={{ itemId: 'فارس' }} />
                <Tab.Screen name="اخبار ستاد" component={TabInnerScreenWrapper} initialParams={{ itemId: 'ستاد' }} />
                <Tab.Screen name="اخبار داخلی" component={TabInnerScreenWrapper} initialParams={{ itemId: 'فرهنگی' }} />
                <Tab.Screen name="برترین ها" component={TabInnerScreenWrapper} initialParams={{ itemId: 'جوان' }} />
            </Tab.Navigator>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    tabBar: {
        height: '9%',
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderBottomWidth: 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    tab: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default FeedScreen;