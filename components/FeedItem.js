import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import FeedInfo from './FeedInfo';

const FeedItem = props => {
    return (
        <View key={props.id}>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 7, paddingHorizontal: 15 }}>
                <View style={{ flexDirection: 'row-reverse', justifyContent: "space-between", alignItems: 'center' }}>
                    <Image
                        style={{ width: 30, height: 30, borderRadius: 15 }}
                        source={{ uri: 'http://192.168.1.151:3000/files/feeds/logos/' + props.from, headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZGVoZ2hhbiIsInBhc3N3b3JkIjoiJDJiJDEwJFF5TjBUVGhjdHUzWmVBNmsvVkEzVk9kQ2NnOGFjMy5BV25JeVJ1ay4wTXUzZEEyaE52S0RhIiwiaWF0IjoxNTk3OTc1NDY4LCJleHAiOjE1OTc5Nzg0Njh9.P-hti6sWwJVHtsb5KhhQ6WFoXELnkHl7HnQ4M1dKPRs' } }}
                    />
                    <Text style={{ paddingHorizontal: 8, fontWeight: 'bold' }}>{props.from}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={props.modalCaller}>
                    <Image
                        source={{ uri: 'http://192.168.1.151:3000/files/feeds/images/' + props.id, headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZGVoZ2hhbiIsInBhc3N3b3JkIjoiJDJiJDEwJFF5TjBUVGhjdHUzWmVBNmsvVkEzVk9kQ2NnOGFjMy5BV25JeVJ1ay4wTXUzZEEyaE52S0RhIiwiaWF0IjoxNTk3OTc1NDY4LCJleHAiOjE1OTc5Nzg0Njh9.P-hti6sWwJVHtsb5KhhQ6WFoXELnkHl7HnQ4M1dKPRs' } }}
                        style={{ resizeMode: 'stretch', width: '100%', height: 275 }}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ paddingHorizontal: 15, flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 7, paddingHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row-reverse', justifyContent: "space-between", alignItems: 'center' }}>
                        <TouchableOpacity style={{ paddingLeft: 20 }}><Ionicons name={'ios-heart-empty'} size={30} color={'black'} /></TouchableOpacity>
                        <TouchableOpacity onPress={props.modalCaller}><Ionicons name={'md-list'} size={30} color={'black'} /></TouchableOpacity>
                        <TouchableOpacity style={{ paddingRight: 20 }}><Ionicons name={'md-paper-plane'} size={30} color={'black'} /></TouchableOpacity>
                    </View>
                    {/* <TouchableOpacity style={{ paddingRight: 20 }}><Ionicons name={'ios-star-outline'} size={30} color={'black'} /></TouchableOpacity> */}
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