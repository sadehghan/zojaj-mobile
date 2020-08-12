import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CourseItem from '../components/CourseItem';
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
        navigation.navigate('CourseDetails');
    };

    return (
        <TabInnerScreen itemId={itemId} callHandler={callHandler} listItem={CourseItem} apiRequest={ApiRequest} />
    );
}

const LearnScreen = props => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity style={{ width: '80%' }}></TouchableOpacity>
                <TouchableOpacity><Ionicons name={'ios-add'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
                lazy={true}
                initialRouteName="نشان شده"
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
                <Tab.Screen name="جدید" component={TabInnerScreenWrapper} initialParams={{ itemId: 'جدید' }} />
                <Tab.Screen name="برترین" component={TabInnerScreenWrapper} initialParams={{ itemId: 'برترین' }} />
                <Tab.Screen name="نشان شده" component={TabInnerScreenWrapper} initialParams={{ itemId: 'نشان' }} />
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

export default LearnScreen;