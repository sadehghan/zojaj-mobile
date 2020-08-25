import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

const FeedInfo = props => {
    const likesInfo = props.likes == 0 ? `هیچ کس هنوز نپسندیده است.` : `${props.likes} نفر پسندیدند.`;
    const commentsInfo = props.commentsNo == 0 ? `هیچ کس هنوز نظری نداده است.` : `مشاهده ${props.commentsNo} نظر`;

    const showComments = () => {
        <View style={{ flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between' }}>
            <FlatList
                data={props.comments.slice(0, 3)}
                renderItem={({ item }) => (
                    <View style={{ width: '90%', flexDirection: 'row-reverse', alignItems: 'center' }}>
                        <TouchableOpacity><Text style={{ fontWeight: 'bold' }}>{item.commenterId.toString()}</Text></TouchableOpacity>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={{}}> {item.comment}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    };

    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <Text style={{ fontWeight: 'bold' }}>{likesInfo}</Text>
            </View>
            <View style={{ paddingVertical: 5, flexDirection: 'row-reverse', alignItems: 'center' }}>
                <Text numberOfLines={2}>{props.title} </Text>
            </View>
            <TouchableOpacity onPress={props.modalCaller}><Text style={{ color: 'grey' }}>{commentsInfo}</Text></TouchableOpacity>
            {showComments()}
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity style={{ paddingTop: 10 }}><Text style={{ fontSize: 10, color: 'grey' }}>{props.date} </Text></TouchableOpacity>
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

export default FeedInfo;