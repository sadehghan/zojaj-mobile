import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FeedItem from '../components/FeedItem';
import TabInnerScreen from '../../../components/TabInnerScreen';
import { fetchFeedsbyCategory } from '../components/FeedsConnections';

function TabInnerScreenWrapper({ route, navigation }) {
    const { itemId } = route.params;
    
    const ApiRequest = async thePage => {
        const LIMIT = 5;
        const result = await fetchFeedsbyCategory(itemId, thePage, LIMIT);
        if (result !== null)
            return result;
        else
            return [];
    };

    const callHandler = () => {
        navigation.navigate('FeedDetails');
    };

    const renderItem = ({ item }) => {
        return (
            <FeedItem
                id={item._id}
                modalCaller={callHandler}
                from={item.source}
                title={item.title}
                desc={item.news}
                likes={item.likesNo}
                likers={item.likers}
                commentsNo={item.commentsNo}
                comments={item.comments}
                date={item.created}
            />
        );
    };

    return (
        <TabInnerScreen render={renderItem} apiRequest={ApiRequest} />
    );
}

const FeedScreen = props => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '9%', paddingTop: 30, backgroundColor: 'white', paddingHorizontal: 30, }}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity><Ionicons name={'ios-recording'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
                lazy={true}
                initialRouteName="خبرگزاری"
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
                <Tab.Screen name="خبرگزاری" component={TabInnerScreenWrapper} initialParams={{ itemId: 'public' }} />
                <Tab.Screen name="اخبار ستاد" component={TabInnerScreenWrapper} initialParams={{ itemId: 'setad' }} />
                <Tab.Screen name="اخبار داخلی" component={TabInnerScreenWrapper} initialParams={{ itemId: 'internal' }} />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '9%',
        paddingTop: 30,
        backgroundColor: 'white',
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