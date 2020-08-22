import AsyncStorage from '@react-native-community/async-storage';

export const isLogin = async () => {
    let result = await getAccessToken();
    console.log('Check', result);
    return result == null ? false : true;
};

const removeTokens = async () => {
    try {
        await AsyncStorage.removeItem('@accessToken');
        await AsyncStorage.removeItem('@refreshToken');
    } catch (e) {
        // saving error
    }
};


const storeAccessToken = async (value) => {
    try {
        await AsyncStorage.setItem('@accessToken', value)
    } catch (e) {
        // saving error
    }
};

const storeRefreshToken = async (value) => {
    try {
        await AsyncStorage.setItem('@refreshToken', value)
    } catch (e) {
        // saving error
    }
};

export const getAccessToken = async (retrieve) => {
    if (retrieve)
        await retrieveAccessToken();

    try {
        const value = await AsyncStorage.getItem('@accessToken')
        if (value !== null) {
            return value;
        }

        return null;
    } catch (e) {
        // error reading value
    }
};

const getRefreshToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@accessToken')
        if (value !== null) {
            return value;
        }

        return null;
    } catch (e) {
        // error reading value
    }
};

export const login = async (username, password) => {
    data = {
        username: username,
        password: password,
    };

    try {
        let response = await fetch('http://192.168.1.151:3000/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let result = await response.json();
        await storeAccessToken(result.accessToken);
        await storeRefreshToken(result.refreshToken);
        return true;
    } catch (error) {
        console.log(error.message);
    }
};

export const logout = async () => {
    try {
        let response = await fetch('http://192.168.1.151:3000/users/logout', {
            method: 'post',
        });
        await removeTokens();
        return true;
    } catch (error) {
        console.log(error.message);
    }
};

const retrieveAccessToken = async () => {
    data = {
        token: getAccessToken()
    };

    try {
        let response = await fetch('http://192.168.1.151:3000/users/token', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let result = await response.json();
        await storeAccessToken(result.accessToken);
        return true;
    } catch (error) {
        console.log(error.message);
    }
};
