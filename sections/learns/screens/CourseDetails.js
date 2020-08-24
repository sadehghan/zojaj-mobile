import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { LONG_TEXT } from '../../../constants/TextConstants';

const CourseDetails = props => {
    const DATA = [
        { id: 0, trigger: false, payload: 1 },
        { id: 1, trigger: false, payload: 1 },
        { id: 2, trigger: false, payload: 1 },
        { id: 3, trigger: false, payload: 1 },
        { id: 4, trigger: false, payload: 1 },
    ];

    const [selectedId, setSelectedId] = useState(null);

    const callHandler = item => {
        selectedId === item.id ? setSelectedId(null) : setSelectedId(item.id);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ margin: 10, backgroundColor: 'white'}}>
                    <Image
                        source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }}
                        style={{ resizeMode: 'cover', width: '100%', height: 275 }}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, backgroundColor: 'white' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingVertical: 10 }}>درباره این دوره</Text>
                    <Text numberOfLines={20}>{LONG_TEXT} </Text>
                </View>
                <View style={{ margin: 10, paddingHorizontal: 20, paddingVertical: 10, borderTopWidth: 0.5, borderColor: 'lightgrey', backgroundColor: 'white' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>سرفصل دوره</Text>
                    <FlatList
                        data={DATA}
                        extraData={selectedId}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => callHandler(item)} style={{ paddingHorizontal: 20, borderBottomWidth: 0.5, borderColor: 'lightgrey' }}>
                                <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                    <Ionicons name={'md-arrow-dropleft'} size={15} color={'black'} />
                                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, paddingHorizontal: 10, paddingVertical: 10 }}>مقدمه</Text>
                                </View>
                                <View style={{ paddingRight: 10 }}>
                                    {selectedId === item.id && <Text style={{ color: 'grey' }}>این متن توضیحی برای مقدمه این بخش است. توجه داشته باشید که این متن می تواند بسیار طولانی باشد</Text>}
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ paddingVertical: 10, paddingHorizontal: 10, margin: 10, backgroundColor: 'white' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>معرفی مدرس</Text>
                    <View style={{ flexDirection: 'row-reverse', paddingHorizontal: 10, paddingTop: 20 }}>
                        <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                        <View style={{ marginHorizontal: 10, paddingHorizontal: 20 }}>
                            <Text style={{ paddingBottom: 10, fontWeight: 'bold', fontSize: 16 }}>رضا آل داوود</Text>
                            <Text style={{ color: 'grey' }}>مدرس دانشگاه امام صادق (ع) و عضو مجمع تشخیص مصلحت نظام</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'white',
    },
});

export default CourseDetails;