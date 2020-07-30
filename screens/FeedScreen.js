import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FeedItem from '../components/FeedItem';

function TabInnerScreen({ route, navigation }) {
    const { itemId } = route.params;
    const [feeds, setFeeds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [refresh, setRefresh] = useState(false);

    const refreshHandler = () => {
        setRefresh(true);
        setFeeds([11, 12, 13, 14, 15, 16, 17, 18, 19]);
        setRefresh(false);
    };

    const callHandler = () => {
        navigation.navigate('FeedDetails');
    };

    return (
        <FlatList
            refreshing={refresh}
            onRefresh={refreshHandler}
            data={feeds}
            keyExtractor={(item, index) => index.toString()}
            style={{ flex: 1 }}
            renderItem={({ item, index }) => (<FeedItem id={index} modalCaller={callHandler} dataType={itemId} />)}
        />
    );
}

const FeedScreen = props => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={ 30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity><Ionicons name={'ios-recording'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
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
                <Tab.Screen name="Fars" component={TabInnerScreen} initialParams={{ itemId: 'FarsNews' }} />
                <Tab.Screen name="Javan" component={TabInnerScreen} initialParams={{ itemId: 'Javan' }} />
                <Tab.Screen name="Isna" component={TabInnerScreen} initialParams={{ itemId: 'Isna' }} />
                <Tab.Screen name="Irinn" component={TabInnerScreen} initialParams={{ itemId: 'Irinn' }} />
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