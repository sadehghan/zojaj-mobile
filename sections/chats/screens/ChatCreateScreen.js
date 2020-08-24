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
                <TouchableOpacity style={{ flexDirection: 'row-reverse', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Ionicons name={'md-add'} size={30} color={'black'} />
                    <Text style={{ paddingHorizontal: 20 }}>ایجاد گروه</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row-reverse', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Ionicons name={'md-add'} size={30} color={'black'} />
                    <Text style={{ paddingHorizontal: 20 }}>ایجاد کانال</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ paddingHorizontal: 10, paddingVertical: 5 }}>مرتب شده بر اساس نام کاربری</Text>
            <View style={{ backgroundColor: 'white' }}>
                <FlatList
                    refreshing={refresh}
                    onRefresh={refreshHandler}
                    data={contacts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={callContactHandler} key={index} style={{ paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row-reverse', paddingVertical: 10 }}>
                            <View style={{ width: '15%', paddingHorizontal: 10 }}>
                                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                            </View>
                            <View style={{ width: '85%', paddingHorizontal: 20 }}>
                                <Text style={{ fontWeight: 'bold' }}>رضا نادری</Text>
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