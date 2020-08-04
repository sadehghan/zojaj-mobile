import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ShareItem from '../components/ShareItem';

function TabInnerScreen({ route, navigation }) {
    const { itemId } = route.params;
    const [shares, setShares] = useState(Array(Math.ceil(Math.random() * 9)).fill(0));
    const [refresh, setRefresh] = useState(false);

    const refreshHandler = () => {
        setRefresh(true);
        setShares(Array(Math.ceil(Math.random() * 9)).fill(0));
        setRefresh(false);
    };

    const callHandler = () => {
        navigation.navigate('ShareDetails');
    };

    return (
        <FlatList
            refreshing={refresh}
            onRefresh={refreshHandler}
            data={shares}
            keyExtractor={(item, index) => index.toString()}
            style={{ flex: 1 }}
            renderItem={({ item, index }) => (<ShareItem id={index} modalCaller={callHandler} dataType={itemId} />)}
        />
    );
}

const ShareScreen = props => {

    const Tab = createMaterialTopTabNavigator();
    const [type, setType] = useState('انیمیشن');
    const [date, setDate] = useState('الان');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity ><Ionicons name={'ios-search'} size={30} color={'black'} /></TouchableOpacity>
                <TouchableOpacity style={{ width: '80%' }}></TouchableOpacity>
                <TouchableOpacity><Ionicons name={'ios-recording'} size={30} color={'black'} /></TouchableOpacity>
            </View>
            <View style={{backgroundColor: 'white', flexDirection: 'row-reverse'}}>
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
                <Tab.Screen name="جدید" component={TabInnerScreen} initialParams={{ itemId: 'جدید' }} />
                <Tab.Screen name="برترین" component={TabInnerScreen} initialParams={{ itemId: 'برترین' }} />
                <Tab.Screen name="نشان شده" component={TabInnerScreen} initialParams={{ itemId: 'نشان' }} />
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