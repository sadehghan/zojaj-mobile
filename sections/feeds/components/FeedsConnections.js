import { getToken, getUserInfo, retrieveAccessToken } from '../../auth/components/UserConnections';
import { ACCESS_TOKEN_KEY } from '../../auth/constants/StorageConstants';
import { SERVER_ADDRESS } from '../../../constants/ServerConstants';

export const fetchFeedsbyCategory = async (category, thePage, limit) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const data = {
        source: category,
        page: thePage,
        limit: limit
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'feeds/filter', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('fetchFeedsbyCategory (#1) :: Access token expired.');
            if (retrieveAccessToken()) {
                return await fetchFeedsbyCategory(category, thePage, limit);
            }
            else {
                console.log('fetchFeedsbyCategory (#2) :: can not retrive access token');
                return null
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('fetchFeedsbyCategory (#3) :: ', result.message);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log('fetchFeedsbyCategory (#4) :: ', error.message);
        return null;
    }
};

export const fetchTopFeeds = async (limit) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const data = {
        limit: limit
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'feeds/top', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('fetchTopFeeds :: Access token expired.');
            if (retrieveAccessToken()) {
                return await fetchTopFeeds(limit);
            }
            else {
                console.log('fetchTopFeeds :: can not retrive access token');
                return null
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('fetchTopFeeds :: ', result.message);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log('fetchTopFeeds :: ', error.message);
        return null;
    }
};

export const searchFeeds = async (word, limit) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const data = {
        regex: word,
        limit: limit
    };
    try {
        const response = await fetch(SERVER_ADDRESS + 'feeds/search', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('searchFeeds :: Access token expired.');
            if (retrieveAccessToken()) {
                return await searchFeeds(word, limit);
            }
            else {
                console.log('searchFeeds :: can not retrive access token');
                return null
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('searchFeeds :: ', result.message);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log('searchFeeds :: ', error.message);
        return null;
    }
};

export const likeFeeds = async (feedId) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const user = await getUserInfo();
    const data = {
        likerId: user.userId
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'feeds/like/' + feedId, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('likeFeeds :: Access token expired.');
            if (retrieveAccessToken()) {
                return await likeFeeds(feedId);
            }
            else {
                console.log('likeFeeds :: can not retrive access token');
                return false
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('likeFeeds :: ', result.message);
            return false;
        }

        return true;
    } catch (error) {
        console.log('likeFeeds :: ', error.message);
        return false;
    }
};

export const commentFeeds = async (feedId, comment) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const user = await getUserInfo();
    const data = {
        commenterId: user.userId,
        comment: comment
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'feeds/comment/' + feedId, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('commentFeeds :: Access token expired.');
            if (retrieveAccessToken()) {
                return await commentFeeds(feedId, comment);
            }
            else {
                console.log('commentFeeds :: can not retrive access token');
                return false
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('commentFeeds :: ', result.message);
            return false;
        }

        return true;
    } catch (error) {
        console.log('commentFeeds :: ', error.message);
        return false;
    }
};

export const bookmarkFeeds = async (feedId) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const user = await getUserInfo();
    const data = {
        userId: user.userId,
    };

    try {
        const response = await fetch(SERVER_ADDRESS + 'feeds/bookmark/' + feedId, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 401) {
            console.log('bookmarkFeeds :: Access token expired.');
            if (retrieveAccessToken()) {
                return await bookmarkFeeds(feedId);
            }
            else {
                console.log('bookmarkFeeds :: can not retrive access token');
                return false
            }
        }

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('bookmarkFeeds :: ', result.message);
            return false;
        }

        return true;
    } catch (error) {
        console.log('bookmarkFeeds :: ', error.message);
        return false;
    }
};