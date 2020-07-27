import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MailItem from '../components/MailItem';

function TabInnerScreen({ route, navigation }) {
    const { itemId } = route.params;
    const [mails, setMails] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [refresh, setRefresh] = useState(false);

    const refreshHandler = () => {
        setRefresh(true);
        setMails([11, 12, 13, 14, 15, 16, 17, 18, 19]);
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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={29} color={'black'} /></TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ borderColor: 'black', borderWidth: 2, width: 36, height: 36, borderRadius: 18 }} source={{ uri: 'https://api.adorable.io/avatars/221' }} />
                </TouchableOpacity>
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
                <Tab.Screen name="All" component={TabInnerScreen} initialParams={{ itemId: 'All' }} />
                <Tab.Screen name="Sent" component={TabInnerScreen} initialParams={{ itemId: 'Sent' }} />
                <Tab.Screen name="Important" component={TabInnerScreen} initialParams={{ itemId: 'Important' }} />
                <Tab.Screen name="Unread" component={TabInnerScreen} initialParams={{ itemId: 'Unread' }} />
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