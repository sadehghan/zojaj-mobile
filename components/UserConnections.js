import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';

import { SERVER_ADDRESS } from '../constants/DataBaseConstants';

export const AuthContext = React.createContext();

export const ACCESS_TOKEN_KEY = '@accessToken';
export const REFRESH_TOKEN_KEY = '@refreshToken';
export const USER_INFO_KEY = '@userInfo';

const removeTokens = async () => {
    try {
        await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
        await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
        return true;
    } catch (error) {
        console.log('removeTokens :: ', error.message);
        return false;
    }
};

export const storeUserInfo = async (info) => {
    try {
        const jsonValue = JSON.stringify(info)
        await AsyncStorage.setItem(USER_INFO_KEY, jsonValue);
        return true;
    } catch (error) {
        console.log('storeUserInfo :: ', error.message);
        return false;
    }
};

export const getUserInfo = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(USER_INFO_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.log('getUserInfo :: ', error.message);
        return null;
    }
};

const storeToken = async (key, token) => {
    try {
        await AsyncStorage.setItem(key, token);
        return true;
    } catch (error) {
        console.log('storeToken :: ' + error.message + ' [ ' + key + ', ' + token + ' ]');
        return false;
    }
};

export const getToken = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
        return null;
    } catch (error) {
        console.log('getToken :: ', error.message);
        return null;
    }
};

export const login = async (username, password) => {
    const user_data = {
        username: username,
        password: password,
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user_data),
        });

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('login :: ', result.message);
            return false;
        }
        
        await storeToken(ACCESS_TOKEN_KEY, result.data.accessToken);
        await storeToken(REFRESH_TOKEN_KEY, result.data.refreshToken);
        await storeUserInfo({ userId: result.data.userId, username: username });
        return true;
    } catch (error) {
        console.log('login :: ', error.message);
        return false;
    }
};

export const logout = async () => {
    try {
        const response = await fetch(SERVER_ADDRESS + 'users/logout', {
            method: 'post',
        });

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('logout :: ', result.message);
            return false;
        }

        await removeTokens();
        return true;
    } catch (error) {
        console.log('logout :: ', error.message);
        return false;
    }
};

export const retrieveAccessToken = async () => {
    const refresh_token = await getToken(REFRESH_TOKEN_KEY);
    const data = {
        token: refresh_token
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'users/token', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('logout :: ', result.message);
            return false;
        }

        await storeToken(ACCESS_TOKEN_KEY, result.accessToken);
        return true;
    } catch (error) {
        console.log('retrieveAccessToken :: ', error.message);
        return false;
    }
};