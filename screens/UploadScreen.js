import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UploadScreen = props => {
    const data = [1, 2, 3, 4];

    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20, }}>
                <Text style={{ fontWeight: 'bold' }}>هنر خودت را به اشتراک بگذار</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ borderStyle: 'dashed', borderWidth: 0.5, borderColor: 'black', borderRadius: 5, alignItems: 'center', justifyContent: 'center', margin: 10, width: '90%', height: 200 }}>
                    <Text style={{ fontWeight: 'bold' }}>فایل مورد نظرت را انتخاب کن</Text>
                    <Text style={{ color: 'grey', fontSize: 10 }}>(بهتر است فایل مورد نظر بزرگتر از ۱۶۰۰ در ۱۲۰۰ و کمتر از ۱۰ مگابایت باشد)</Text>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>چند تصویری</Text>
                <View style={{ paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        horizontal={true}
                        data={data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ marginHorizontal: 5, width: 80, height: 60, paddingVertical: 10, borderStyle: 'dashed', borderRadius: 5, borderColor: 'black', borderWidth: 0.5 }}>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item}
                    />
                </View>
            </View>
            <View style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>عنوان</Text>
                <TextInput maxLength={40} placeholderTextColor={'dimgrey'} placeholder={'عنوان مناسب '} style={{backgroundColor: 'lightgrey', borderRadius: 10, height: 50, margin: 10, textAlign: 'center'}} />
                <Text style={{ fontWeight: 'bold' }}>توضیح</Text>
                <TextInput multiline={true} placeholderTextColor={'dimgrey'} placeholder={'درباره طرحت چند خطی توضیح بنویس '} style={{backgroundColor: 'lightgrey', borderRadius: 10, height: 50, margin: 10, textAlign: 'center'}} />
            </View>
            <TouchableOpacity style={{margin: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 0.5, backgroundColor: 'dimgray'}}><Text style={{fontWeight: 'bold', color: 'white'}}>بارگذاری</Text></TouchableOpacity>
        </ScrollView>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default UploadScreen;