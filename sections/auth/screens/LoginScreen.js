import React, { useState, useContext } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';

import { AuthContext } from '../components/UserConnections';

const LoginScreen = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);

    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in" onPress={() => { signIn({ username, password }) }} />
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'white',
    },
});

export default LoginScreen;