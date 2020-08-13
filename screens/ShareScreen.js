import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ShareItem from '../components/ShareItem';
import TabInnerScreen from '../components/TabInnerScreen';

import { FEED_LIST } from '../constants/DataBaseConstants';

function TabInnerScreenWrapper({ route, navigation }) {
    const { itemId } = route.params;

    const ApiRequest = async thePage => {
        const LIMIT = 5;
        await setTimeout(() => { }, 1500);
        return FEED_LIST.slice((thePage - 1) * LIMIT, thePage * LIMIT);
    };

    const callHandler = () => {
        navigation.navigate('ShareDetails');
    };

    return (
        <TabInnerScreen itemId={itemId} callHandler={callHandler} listItem={ShareItem} apiRequest={ApiRequest} />
    );
}

const ShareScreen = props => {

    const Tab = createMaterialTopTabNavigator();
    const [type, setType] = useState('انیمیشن');
    const [date, setDate] = useState('الان');

    const callUploadHandler = () => {
        props.navigation.navigate('UploadScreen');
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '9%', paddingTop: 30, backgroundColor: 'white', paddingHorizontal: 30, }}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity style={{ width: '80%' }}></TouchableOpacity>
                <TouchableOpacity onPress={callUploadHandler}><Ionicons name={'ios-add'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'white', flexDirection: 'row-reverse' }}>
                <Picker
                    selectedValue={type}
                    style={{ paddingHorizontal: 30, height: 40, width: '50%' }}
                    mode={'dialog'}
                    onValueChange={(itemValue, itemIndex) =>
                        setType(itemValue)
                    }
                >
                    <Picker.Item label="انیمیشن" value="java" />
                    <Picker.Item label="عکس" value="js" />
                </Picker>
                <Picker
                    selectedValue={date}
                    style={{ paddingHorizontal: 30, height: 40, width: '50%' }}
                    mode={'dialog'}
                    onValueChange={(itemValue, itemIndex) =>
                        setDate(itemValue)
                    }
                >
                    <Picker.Item label="الان" value="java" />
                    <Picker.Item label="هفته گذشته" value="js" />
                </Picker>
            </View>
            <Tab.Navigator
                lazy={true}
                initialRouteName="جدید"
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'darkgrey',
                    indicatorStyle: {
                        backgroundColor: 'black'
                    },
                    labelStyle: {
                        fontWeight: 'bold',
                        fontSize: 10
                    },
                }}
            >
                <Tab.Screen name="جدید" component={TabInnerScreenWrapper} initialParams={{ itemId: 'جدید' }} />
                <Tab.Screen name="برترین" component={TabInnerScreenWrapper} initialParams={{ itemId: 'برترین' }} />
                <Tab.Screen name="نشان شده" component={TabInnerScreenWrapper} initialParams={{ itemId: 'نشان' }} />
            </Tab.Navigator>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'white',
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
    tabBar: {
        height: '9%',
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderBottomWidth: 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    tab: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ShareScreen;