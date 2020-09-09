import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FeedItem from '../components/FeedItem';
import TabInnerScreen from '../../../components/TabInnerScreen';
import { fetchFeedsbyCategory } from '../components/FeedsConnections';
import { getUserBookmarkedFeeds } from '../../auth/components/UserConnections';

function TabInnerScreenWrapper({ route, navigation }) {
    const { itemId } = route.params;
    const [bookmarkedFeeds, setBookmarkedFeeds] = useState([]);

    const ApiRequest = async thePage => {
        const bookmarked = await getUserBookmarkedFeeds();
        setBookmarkedFeeds(bookmarked);

        const LIMIT = 5;
        const result = await fetchFeedsbyCategory(itemId, thePage, LIMIT);
        if (result !== null)
            return result;
        else
            return [];
    };

    const callHandler = (news, comments, id) => {
        navigation.navigate('FeedDetails', {news: news, comments: comments, id: id});
    };

    const renderItem = ({ item }) => {
        isBooked = bookmarkedFeeds.includes(item._id);
        
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
                isBookmarked={isBooked}
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