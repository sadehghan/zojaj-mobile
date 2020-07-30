import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatItem from '../components/ChatItem';

function TabInnerScreen({ route, navigation }) {
    const { itemId } = route.params;
    const [mails, setMails] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [refresh, setRefresh] = useState(false);

    const refreshHandler = () => {
        setRefresh(true);
        setMails([11, 12, 13, 14, 15, 16, 17, 18, 19]);
        setRefresh(false);
    };

    const callChatHandler = () => {
        navigation.navigate('ChatContent', {itemId: 77});
    };

    return (
        <FlatList
            refreshing={refresh}
            onRefresh={refreshHandler}
            data={mails}
            keyExtractor={(item, index) => index.toString()}
            style={{ flex: 1 }}
            renderItem={({ item, index }) => (<ChatItem id={index} chatCaller={callChatHandler} dataType={itemId} />)}
        />
    );
}

const ChatScreen = props => {
    const Tab = createMaterialTopTabNavigator();

    const callCreateChatHandler = () => {
        console.log('Create chat');
        props.navigation.navigate('ChatCreate');
    };

    const callProfileHandler = () => {
        //props.navigation.navigate('MailDetails');
        console.log('Profile');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity onPress={callProfileHandler}><Image style={{ width: 34, height: 34, borderRadius: 17 }} source={{ uri: 'https://api.adorable.io/avatars/55' }} /></TouchableOpacity>
                <TouchableOpacity onPress={callCreateChatHandler}><Ionicons name={'md-add'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'darkgrey',
                    indicatorStyle: {
                        backgroundColor: 'black'
                    },
                    labelStyle: {
                        fontWeight: 'bold',
                        fontSize: 10,
                    },
                }}
            >
                <Tab.Screen name="Chats" component={TabInnerScreen} initialParams={{ itemId: 'Chat' }} />
                <Tab.Screen name="Groups" component={TabInnerScreen} initialParams={{ itemId: 'Group' }} />
                <Tab.Screen name="Chanels" component={TabInnerScreen} initialParams={{ itemId: 'Chanel' }} />
            </Tab.Navigator>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
});

export default ChatScreen;