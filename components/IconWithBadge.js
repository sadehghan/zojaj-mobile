import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconWithBadge = props => {
    return (
        <View style={styles.icon}>
            <Ionicons name={props.name} size={props.size} color={props.color} />
            {props.badgeCount > 0 && (
                <View style={styles.badgeIcon}>
                    <Text style={styles.badge}>
                        {props.badgeCount}
                    </Text>
                </View>
            )}
        </View>
    );
};

styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        margin: 5
    },
    badgeIcon: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: 'red',
        borderRadius: 7,
        width: 14,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
});

export default IconWithBadge;