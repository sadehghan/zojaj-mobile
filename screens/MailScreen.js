import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MailItem from '../components/MailItem';

function TabInnerScreen({ route, navigation }) {
    const { itemId } = route.params;
    const [mails, setMails] = useState(Array(Math.ceil(Math.random() * 9)).fill(0));
    const [refresh, setRefresh] = useState(false);

    const refreshHandler = () => {
        setRefresh(true);
        setMails(Array(Math.ceil(Math.random() * 9)).fill(0));
        setRefresh(false);
    };

    const callHandler = () => {
        navigation.navigate('MailDetails');
    };

    return (
        <FlatList
            refreshing={refresh}
            onRefresh={refreshHandler}
            data={mails}
            keyExtractor={(item, index) => index.toString()}
            style={{ flex: 1 }}
            renderItem={({ item, index }) => (<MailItem id={index} modalCaller={callHandler} dataType={itemId} />)}
        />
    );
}

const MailScreen = props => {
    const Tab = createMaterialTopTabNavigator();

    const callCreateMailHandler = () => {
        props.navigation.navigate('MailCreate');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={ 30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity style={{width: '80%'}}></TouchableOpacity>
                <TouchableOpacity onPress={callCreateMailHandler}><Ionicons name={'md-add'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <Tab.Navigator
                initialRouteName="نخوانده"
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
                <Tab.Screen name="همه" component={TabInnerScreen} initialParams={{ itemId: 'All' }} />
                <Tab.Screen name="ارسالی" component={TabInnerScreen} initialParams={{ itemId: 'Sent' }} />
                <Tab.Screen name="مهم" component={TabInnerScreen} initialParams={{ itemId: 'Important' }} />
                <Tab.Screen name="نخوانده" component={TabInnerScreen} initialParams={{ itemId: 'Unread' }} />
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