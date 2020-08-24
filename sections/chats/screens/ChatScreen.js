import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatItem from '../components/ChatItem';
import TabInnerScreen from '../../../components/TabInnerScreen';
import { fetchMails } from '../components/Connections';

function TabInnerScreenWrapper({ route, navigation }) {
    const { itemId } = route.params;

    const ApiRequest = async thePage => {
        const LIMIT = 10;
        result = await fetchMails(itemId, thePage, LIMIT);
        return result;
    };

    const callHandler = () => {
        navigation.navigate('ChatContent', { itemId: 77 });
    };

    const renderItem = ({ item }) => {
        return (
            <ChatItem
                id={item.chatId}
                modalCaller={callHandler}

            />
        );
    };

    return (
        <TabInnerScreen render={renderItem} apiRequest={ApiRequest} />
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '9%', paddingTop: 30, backgroundColor: 'white', paddingHorizontal: 30, }}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity onPress={callCreateChatHandler}><Ionicons name={'md-add'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
                lazy={true}
                initialRouteName="کانال"
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
                <Tab.Screen name="گفتگو" component={TabInnerScreenWrapper} initialParams={{ itemId: 'Chat' }} />
                <Tab.Screen name="گروه" component={TabInnerScreenWrapper} initialParams={{ itemId: 'Group' }} />
                <Tab.Screen name="کانال" component={TabInnerScreenWrapper} initialParams={{ itemId: 'Channel' }} />
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