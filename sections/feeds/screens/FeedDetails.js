import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { commentFeeds } from '../components/FeedsConnections';

const FeedDetails = props => {

    const [value, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={{
                height: 60,
                // paddingTop: 30,
                backgroundColor: 'white',
                borderColor: 'darkgrey',
                borderBottomWidth: 0.4,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: 20,
                backgroundColor: 'lightgrey'
            }}>
                <View style={{ paddingHorizontal: 20, backgroundColor: 'white', width: '95%', height: '80%', borderRadius: 15, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
                    <TextInput placeholder={'نوشتن توضیح ...'} value={value} onChangeText={text => onChangeText(text)}></TextInput>
                    <TouchableOpacity onPress={() => commentFeeds(props.route.params.id, value)}>
                        <Text style={{ color: 'blue' }}> ارسال</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row-reverse', paddingRight: 95, paddingVertical: 20, borderColor: 'lightgrey', borderBottomWidth: 0.5 }}>
                        <View style={{ width: '20%', paddingHorizontal: 10, alignItems: 'center' }}>
                            <Image style={{ width: 30, height: 30, borderRadius: 15 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                        </View>
                        <View style={{ paddingTop: 5 }}>
                            <Text style={{ fontWeight: 'bold' }}>خبرگزاری فارس</Text>
                            <View style={{ paddingTop: 10 }}>
                                <Text>{props.route.params.news}</Text>
                            </View>
                            <Text style={{ color: 'lightgrey', fontSize: 10, paddingTop: 10 }}>27m</Text>
                        </View>
                    </View>
                    {
                        props.route.params.comments.map((comment, index) => {
                            return (
                                <View key={index} style={{ width: '100%', flexDirection: 'row', paddingRight: 95, paddingVertical: 10, borderColor: 'lightgrey', borderBottomWidth: 0.3 }}>
                                    <View style={{ width: '20%', paddingHorizontal: 10, alignItems: 'center' }}>
                                        <Image style={{ width: 30, height: 30, borderRadius: 15 }} source={{ uri: 'https://api.adorable.io/avatars/' + Math.ceil(Math.random() * 1000 + 1) }} />
                                    </View>
                                    <View style={{ paddingTop: 6 }}>
                                        <Text style={{ fontWeight: 'bold', paddingBottom: 3 }}>{Math.random().toString(36).substring(5)}</Text>
                                        <Text>{comment}</Text>
                                        <Text style={{ color: 'lightgrey', fontSize: 10, paddingTop: 10 }}>{index + 25}m</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: 60,
        paddingTop: 30,
        backgroundColor: 'white',
        borderColor: 'darkgrey',
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        paddingHorizontal: 20,
    },
    commentInput: {
        height: 60,
        // paddingTop: 30,
        backgroundColor: 'white',
        borderColor: 'darkgrey',
        borderBottomWidth: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: 'lightgrey'
    }
});

export default FeedDetails;