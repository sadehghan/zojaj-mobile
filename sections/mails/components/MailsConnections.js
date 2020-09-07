import { getToken, getUserInfo, retrieveAccessToken } from '../../auth/components/UserConnections';
import { ACCESS_TOKEN_KEY } from '../../auth/constants/StorageConstants';
import { SERVER_ADDRESS } from '../../../constants/ServerConstants';

export const fetchMails = async (category, thePage, limit) => {
    if (category == 'ALL')
        return await fetchAllMails(thePage, limit);
    else if (category == 'UNREAD')
        return await fetchUnreadMails(thePage, limit);
    else if (category == 'IMPORTANT')
        return await fetchImportantMails(thePage, limit);
    else if (category == 'SENT')
        return await fetchSentMails(thePage, limit);
    else
        console.log('fetchMails (#1) :: Invalid category');
};

export const setMailImportant = async (mailId) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const user = await getUserInfo();
    const data = {
        userId: user.userId,
        mailId: mailId,
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'mails/setimportant', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('setMailImportant (#1) :: Access token expired.');
            if (retrieveAccessToken()) {
                return await setMailImportant(mailId);
            }
            else {
                console.log('setMailImportant (#2) :: can not retrive access token');
                return fasle
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('setMailImportant (#3) :: ', result.message);
            return false;
        }

        return true;
    } catch (error) {
        console.log('setMailImportant (#4) :: ', error.message);
        return false;
    }
};

export const setMailReaded = async (mailId) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const user = await getUserInfo();
    const data = {
        userId: user.userId,
        mailId: mailId,
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'mails/setread', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('setMailReaded (#1) :: Access token expired.');
            if (retrieveAccessToken()) {
                return await setMailReaded(mailId);
            }
            else {
                console.log('setMailReaded (#2) :: can not retrive access token');
                return fasle
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('setMailReaded (#3) :: ', result.message);
            return false;
        }

        return true;
    } catch (error) {
        console.log('setMailReaded (#4) :: ', error.message);
        return false;
    }
};

export const sendMail = async (subject, text, destinations) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const user = await getUserInfo();

    const data = {
        source: user.userId,
        destinations: destinations,
        subject: subject,
        text: text,
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'mails/send', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('sendMail (#1) :: Access token expired.');
            if (retrieveAccessToken()) {
                return await sendMail(subject, text, destinations);
            }
            else {
                console.log('sendMail (#2) :: can not retrive access token');
                return fasle
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('sendMail (#3) :: ', result.message);
            return false;
        }

        return true;
    } catch (error) {
        console.log('sendMail (#4) :: ', error.message);
        return false;
    }
};

const fetchAllMails = async (thePage, limit) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const user = await getUserInfo();
    const data = {
        page: thePage,
        limit: limit,
        userId: user.userId
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'mails/all', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('fetchAllMails (#1) :: Access token expired.');
            if (retrieveAccessToken()) {
                return await fetchAllMails(thePage, limit);
            }
            else {
                console.log('fetchAllMails (#2) :: can not retrive access token');
                return null
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('fetchAllMails (#3) :: ', result.message);
            return null;
        }

        return result.data;
    } catch (error) {
        console.log('fetchAllMails (#4) :: ', error.message);
        return null;
    }
};

const fetchUnreadMails = async (thePage, limit) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const user = await getUserInfo();

    const data = {
        page: thePage,
        limit: limit,
        userId: user.userId,
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'mails/unread', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('fetchUnreadMails (#1) :: Access token expired.');
            if (retrieveAccessToken()) {
                return await fetchUnreadMails(thePage, limit);
            }
            else {
                console.log('fetchUnreadMails (#2) :: can not retrive access token');
                return null
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('fetchUnreadMails (#3) :: ', result.message);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log('fetchUnreadMails (#4) :: ', error.message);
        return null;
    }
};

const fetchImportantMails = async (thePage, limit) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const user = await getUserInfo();

    const data = {
        page: thePage,
        limit: limit,
        userId: user.userId,
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'mails/important', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('fetchImportantMails (#1) :: Access token expired.');
            if (retrieveAccessToken()) {
                return await fetchImportantMails(thePage, limit);
            }
            else {
                console.log('fetchImportantMails (#2) :: can not retrive access token');
                return null
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('fetchImportantMails (#3) :: ', result.message);
            return null;
        }

        return result.data;
    } catch (error) {
        console.log('fetchImportantMails (#4) :: ', error.message);
        return null;
    }
};

const fetchSentMails = async (thePage, limit) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const user = await getUserInfo();

    const data = {
        page: thePage,
        limit: limit,
        userId: user.userId,
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'mails/sent', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('fetchSentMails (#1) :: Access token expired.');
            if (retrieveAccessToken()) {
                return await fetchSentMails(thePage, limit);
            }
            else {
                console.log('fetchSentMails (#2) :: can not retrive access token');
                return null
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('fetchSentMails (#3) :: ', result.message);
            return null;
        }

        return result.data;
    } catch (error) {
        console.log('fetchSentMails (#4) :: ', error.message);
        return null;
    }
};