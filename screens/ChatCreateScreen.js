import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatCreateScreen = props => {
    const [contacts, setContacts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23, 24, 25, 26]);
    const [refresh, setRefresh] = useState(false);

    const refreshHandler = () => {
        setRefresh(true);
        setContacts([11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26]);
        setRefresh(false);
    };

    const callContactHandler = () => {
        //navigation.navigate('ChatContent', {itemId: 77});
        console.log('Contact clicked');
    };

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Ionicons name={'md-add'} size={30} color={'black'} />
                    <Text style={{ paddingHorizontal: 20 }}>New Group</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Ionicons name={'md-add'} size={30} color={'black'} />
                    <Text style={{ paddingHorizontal: 20 }}>New Channel</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ paddingHorizontal: 10, paddingVertical: 5 }}>Sorted by Username</Text>
            <View style={{ backgroundColor: 'white' }}>
                <FlatList
                    refreshing={refresh}
                    onRefresh={refreshHandler}
                    data={contacts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={callContactHandler} key={index} style={{ paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingVertical: 10 }}>
                            <View style={{ width: '20%' }}>
                                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                            </View>
                            <View style={{ width: '70%' }}>
                                <Text style={{ fontWeight: 'bold' }}>Reza Nader</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ChatCreateScreen;