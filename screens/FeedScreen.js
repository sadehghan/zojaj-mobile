import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FeedItem from '../components/FeedItem';

function TabInnerScreen({ route, navigation }) {
    const { itemId } = route.params;
    const [feeds, setFeeds] = useState(Array(Math.ceil(Math.random() * 9)).fill(0));
    const [refresh, setRefresh] = useState(false);

    const refreshHandler = () => {
        setRefresh(true);
        setFeeds(Array(Math.ceil(Math.random() * 9)).fill(0));
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
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity style={{width: '80%'}}></TouchableOpacity>
                <TouchableOpacity><Ionicons name={'ios-recording'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
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
                <Tab.Screen name="خبرگزاری" component={TabInnerScreen} initialParams={{ itemId: 'فارس' }} />
                <Tab.Screen name="اخبار ستاد" component={TabInnerScreen} initialParams={{ itemId: 'ستاد' }} />
                <Tab.Screen name="اخبار داخلی" component={TabInnerScreen} initialParams={{ itemId: 'فرهنگی' }} />
                <Tab.Screen name="برترین ها" component={TabInnerScreen} initialParams={{ itemId: 'جوان' }} />
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