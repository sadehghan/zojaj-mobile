import React, { useState, useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatContentScreen = props => {
    const { itemId } = props.route.params;

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity><Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: 'https://api.adorable.io/avatars/' + JSON.stringify(itemId) }} /></TouchableOpacity>
                    <Text style={{ paddingHorizontal: 20, fontWeight: 'bold' }}>Nader</Text>
                </View>
            ),
        });
    }, [props.navigation]);

    const scrollViewRef = useRef();

    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1),
                },
                sent: true,
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
        // <View style={{ backgroundColor: 'white', flexDirection: 'column-reverse', justifyContent: 'flex-start' }}>
        //     <View style={{ borderColor: 'grey', borderWidth: 1, height: '7%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        //         <Text>MUTE</Text>
        //     </View>
        //     <ScrollView
        //         style={{ height: '93%' }}
        //         ref={scrollViewRef}
        //         onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        //     >
        //         <View>
        //             <Text multi></Text>
        //         </View>
        //     </ScrollView>
        // </View>
    );

};

styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ChatContentScreen;