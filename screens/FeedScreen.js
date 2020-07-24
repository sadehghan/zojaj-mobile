import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import FeedItem from '../components/FeedItem';

const FeedScreen = props => {
    const [feeds, setFeeds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [refresh, setRefresh] = useState(false);

    const refreshHandler = () => {
        setRefresh(true);
        setFeeds([11, 12, 13, 14, 15, 16, 17, 18, 19]);
        setRefresh(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <Text styles={{ fontSize: 61, fontWeight: 'bold' }}>News</Text>
                <TouchableOpacity><Ionicons name={'ios-recording'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <View style={styles.tabBar}>
                <TouchableOpacity style={[{ backgroundColor: 'yellowgreen' }, styles.tab]}><Text>تحلیل</Text></TouchableOpacity>
                <TouchableOpacity style={[{ backgroundColor: 'tomato' }, styles.tab]}><Text>اخبار</Text></TouchableOpacity>
                <TouchableOpacity style={[{ backgroundColor: 'lightblue' }, styles.tab]}><Text>اعلان</Text></TouchableOpacity>
                <TouchableOpacity style={[{ backgroundColor: 'cornsilk' }, styles.tab]}><Text>برترین</Text></TouchableOpacity>
            </View>
            <FlatList 
                refreshing={refresh}
                onRefresh={refreshHandler}
                data={feeds}
                keyExtractor={(item, index) => index.toString()}
                style={{flex: 1}}
                renderItem={({item, index}) => (<FeedItem id={index}/>)}
            />
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    tabBar: {
        height: '8%',
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