import { getToken, ACCESS_TOKEN_KEY, getUserInfo } from './UserConnections';

export const fetchFeedsbyCategory = async (category, thePage, limit) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const data = {
        source: category,
        page: thePage,
        limit: limit
    };

    try {
        const response = await fetch('http://192.168.1.151:3000/feeds/filter', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('fetchFeedsbyCategory :: ', result.message);
            return null;
        }

        return result;
    } catch (error) {
        console.log('fetchFeedsbyCategory :: ', error.message);
        return null;
    }
};

export const fetchTopFeeds = async (limit) => {
    const access_token = await getToken(ACCESS_TOKEN_KEY);
    const data = {
        limit: limit
    };

    try {
        const response = await fetch('http://192.168.1.151:3000/feeds/top', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('fetchTopFeeds :: ', result.message);
            return null;
        }

        return result;
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
        const response = await fetch('http://192.168.1.151:3000/feeds/search', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.status == 'failed') {
            console.log('searchFeeds :: ', result.message);
            return null;
        }

        return result;
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
        const response = await fetch('http://192.168.1.151:3000/feeds/like/' + feedId, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

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
        const response = await fetch('http://192.168.1.151:3000/feeds/comment/' + feedId, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

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
        const response = await fetch('http://192.168.1.151:3000/feeds/bookmark/' + feedId, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

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