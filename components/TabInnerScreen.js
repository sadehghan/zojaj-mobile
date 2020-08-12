import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabInnerScreen = props => {
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
    };

    useEffect(() => {
        FetchData();
    }, []);

    const onRefresh = () => {
        FetchData();
    };

    const loadMore = () => {
        return (
            <View>
                <ActivityIndicator animating={refresh}/>
            </View>
        );
    };

    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (<props.listItem id={item.id} modalCaller={props.callHandler} dataType={props.itemId} />)}
            data={data}
            onEndReached={FetchMoreData}
            onEndReachedThreshold={0.1}
            onRefresh={onRefresh}
            refreshing={refresh}
            ListFooterComponent={loadMore}
        />
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabInnerScreen;