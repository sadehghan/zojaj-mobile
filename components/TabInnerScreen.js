import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabInnerScreen = props => {
    const flatListRef = useRef(null);
    const [refresh, setRefresh] = useState(false);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    FetchData = async () => {
        setRefresh(true);
        const p = 1;
        setPage(p);
        let document = await props.apiRequest(p);
        setData(document);
        setRefresh(false);
    };

    FetchMoreData = async () => {
        setRefresh(true);
        let p = page + 1
        setPage(p);
        let document = await props.apiRequest(p);
        setData([...data, ...document]);
        setRefresh(false);
        console.log(data);
    };

    useEffect(() => {
        FetchData();
    }, []);

    const onRefresh = () => {
        FetchData();
        console.log('fetch', data);
    };

    const loadMore = () => {
        return (
            <View>
                <ActivityIndicator animating={refresh} />
            </View>
        );
    };

    const keyExtractor = (item, index) => {
        return index.toString();
    };

    return useMemo(() => {
        return (
            <FlatList
                ref={flatListRef}
                keyExtractor={keyExtractor}
                renderItem={props.render}
                data={data}
                onEndReached={FetchMoreData}
                onEndReachedThreshold={0.1}
                onRefresh={onRefresh}
                refreshing={refresh}
                ListFooterComponent={loadMore}
                windowSize={5}
                initialNumToRender={3}
            />
        );
    }, [data, refresh]);
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabInnerScreen;