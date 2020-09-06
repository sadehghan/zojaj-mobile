import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MailItem from '../components/MailItem';
import TabInnerScreen from '../../../components/TabInnerScreen';
import { fetchMails } from '../components/MailsConnections';
import { getUserInfo } from '../../auth/components/UserConnections';

function TabInnerScreenWrapper({ route, navigation }) {
    const { itemId } = route.params;

    const ApiRequest = async thePage => {
        const LIMIT = 10;
        const result = await fetchMails(itemId, thePage, LIMIT);
        if (result !== null)
            return result;
        else
            return [];
    };

    const callHandler = (title, from, text, date) => {
        navigation.navigate('MailDetails', { title: title, from: from, text: text, date: date });
    };

    const renderItem = ({ item }) => {
        const isRead = false;
        const isImportant = false;
        const userInfo = await getUserInfo();

        if (itemId != 'UNREAD' && item.readers.includes(userInfo.userId))
            isRead = true;

        if (itemId == 'IMPORTANT' || item.importants.includes(userInfo.userId))
            isImportant = true;

        return (
            <MailItem
                id={item.mailId}
                modalCaller={callHandler}
                from={item.source}
                to={item.destinations}
                title={item.subject}
                text={item.text}
                date={item.created}
                isRead={isRead}
                isImportant={isImportant}
            />
        );
    };

    return (
        <TabInnerScreen render={renderItem} apiRequest={ApiRequest} />
    );
}

const MailScreen = props => {
    const Tab = createMaterialTopTabNavigator();

    const callCreateMailHandler = () => {
        props.navigation.navigate('MailCreate');
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '9%', paddingTop: 30, backgroundColor: 'white', paddingHorizontal: 30, }}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity onPress={callCreateMailHandler}><Ionicons name={'md-add'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
                lazy={true}
                initialRouteName="همه"
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
                <Tab.Screen name="همه" component={TabInnerScreenWrapper} initialParams={{ itemId: 'ALL' }} />
                <Tab.Screen name="ارسالی" component={TabInnerScreenWrapper} initialParams={{ itemId: 'SENT' }} />
                <Tab.Screen name="مهم" component={TabInnerScreenWrapper} initialParams={{ itemId: 'IMPORTANT' }} />
                <Tab.Screen name="نخوانده" component={TabInnerScreenWrapper} initialParams={{ itemId: 'UNREAD' }} />
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

export default MailScreen;