import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import FeedInfo from './FeedInfo';
import { SERVER_ADDRESS } from '../../../constants/ServerConstants';
import { getToken, getUserInfo } from '../../auth/components/UserConnections';
import { ACCESS_TOKEN_KEY } from '../../auth/constants/StorageConstants';
import { likeFeeds, bookmarkFeeds } from '../components/FeedsConnections'

const FeedItem = props => {
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const likeItem = async () => {
        if (isLiked)
            return;

        if (await likeFeeds(props.id))
            setIsLiked(true);
    };

    const bookmarkItem = async () => {
        if (isBookmarked)
            return;

        if (await bookmarkFeeds(props.id))
            setIsBookmarked(true);
    };

    const initialize = async () => {
        const userInfo = await getUserInfo();
        if (props.likers.includes(userInfo.userId)) {
            setIsLiked(true);
        }

        setIsBookmarked(props.isBookmarked);
    };

    const LikeStatus = () => {
        return isLiked ? <Ionicons name={'ios-heart'} size={30} color={'black'} /> : <Ionicons name={'ios-heart-empty'} size={30} color={'black'} />
    };

    const BookmarkStatus = () => {
        return isBookmarked ? <Ionicons name={'ios-star'} size={30} color={'black'} /> : <Ionicons name={'ios-star-outline'} size={30} color={'black'} />
    };

    useEffect(() => {
        initialize();
    }, []);

    useEffect(() => {
    }, [isLiked, isBookmarked]);

    const access_token = getToken(ACCESS_TOKEN_KEY);

    return (
        <View key={props.id}>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 7, paddingHorizontal: 15 }}>
                <View style={{ flexDirection: 'row-reverse', justifyContent: "space-between", alignItems: 'center' }}>
                    <Image
                        style={{ width: 30, height: 30, borderRadius: 15 }}
                        source={{ uri: SERVER_ADDRESS + 'files/feeds/logos/' + props.from, headers: { Authorization: 'Bearer ' + access_token } }}
                    />
                    <Text style={{ paddingHorizontal: 8, fontWeight: 'bold' }}>{props.from}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => props.modalCaller(props.desc, props.comments, props.id)}>
                    <Image
                        source={{ uri: SERVER_ADDRESS + 'files/feeds/images/' + props.id, headers: { Authorization: 'Bearer ' + access_token } }}
                        style={{ resizeMode: 'stretch', width: '100%', height: 275 }}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ paddingHorizontal: 15, flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 7, paddingHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row-reverse', justifyContent: "space-between", alignItems: 'center' }}>
                        <TouchableOpacity onPress={likeItem} style={{ paddingLeft: 20 }}>
                            <LikeStatus></LikeStatus>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.modalCaller(props.desc, props.comments, props.id)}><Ionicons name={'md-list'} size={30} color={'black'} /></TouchableOpacity>

                        <TouchableOpacity style={{ paddingRight: 20 }}><Ionicons name={'md-paper-plane'} size={30} color={'black'} /></TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={bookmarkItem} style={{ paddingLeft: 20 }}>
                        <BookmarkStatus></BookmarkStatus>
                    </TouchableOpacity>
                </View>
                <FeedInfo
                    title={props.title}
                    desc={props.desc}
                    likes={props.likes}
                    commentsNo={props.commentsNo}
                    comments={props.comments}
                    date={props.date}
                    modalCaller={props.modalCaller}
                />
            </View>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FeedItem;