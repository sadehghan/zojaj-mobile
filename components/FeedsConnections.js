export const fetchFeedsbyCategory = async (category, thePage, limit) => {
    data = {
        source: category,
        page: thePage,
        limit: limit
    };
    try {
        let response = await fetch('http://192.168.1.151:3000/feeds/filter', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZGVoZ2hhbiIsInBhc3N3b3JkIjoiJDJiJDEwJFF5TjBUVGhjdHUzWmVBNmsvVkEzVk9kQ2NnOGFjMy5BV25JeVJ1ay4wTXUzZEEyaE52S0RhIiwiaWF0IjoxNTk4MDI4NDgxLCJleHAiOjE1OTgwMzE0ODF9.1peFgABecCLZxHPpMI1khleAPwDG3Zp7RgOESrl9IvQ',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }
};

export const fetchTopFeeds = async (limit) => {
    data = {
        limit: limit
    };
    try {
        let response = await fetch('http://192.168.1.151:3000/feeds/top', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZGVoZ2hhbiIsInBhc3N3b3JkIjoiJDJiJDEwJFF5TjBUVGhjdHUzWmVBNmsvVkEzVk9kQ2NnOGFjMy5BV25JeVJ1ay4wTXUzZEEyaE52S0RhIiwiaWF0IjoxNTk3OTc1NDY4LCJleHAiOjE1OTc5Nzg0Njh9.P-hti6sWwJVHtsb5KhhQ6WFoXELnkHl7HnQ4M1dKPRs',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }
};

export const searchFeeds = async (word, limit) => {
    data = {
        regex: word,
        limit: limit
    };
    try {
        let response = await fetch('http://192.168.1.151:3000/feeds/search', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZGVoZ2hhbiIsInBhc3N3b3JkIjoiJDJiJDEwJFF5TjBUVGhjdHUzWmVBNmsvVkEzVk9kQ2NnOGFjMy5BV25JeVJ1ay4wTXUzZEEyaE52S0RhIiwiaWF0IjoxNTk3OTc1NDY4LCJleHAiOjE1OTc5Nzg0Njh9.P-hti6sWwJVHtsb5KhhQ6WFoXELnkHl7HnQ4M1dKPRs',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }
};

export const likeFeeds = async (feedId) => {
    const userId = fetchUserId();
    data = {
        likerId: userId
    };
    try {
        let response = await fetch('http://192.168.1.151:3000/feeds/like/' + feedId, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZGVoZ2hhbiIsInBhc3N3b3JkIjoiJDJiJDEwJFF5TjBUVGhjdHUzWmVBNmsvVkEzVk9kQ2NnOGFjMy5BV25JeVJ1ay4wTXUzZEEyaE52S0RhIiwiaWF0IjoxNTk3OTc1NDY4LCJleHAiOjE1OTc5Nzg0Njh9.P-hti6sWwJVHtsb5KhhQ6WFoXELnkHl7HnQ4M1dKPRs',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }
};

export const commentFeeds = async (feedId, comment) => {
    const userId = fetchUserId();
    data = {
        commenterId: userId,
        comment: comment
    };
    try {
        let response = await fetch('http://192.168.1.151:3000/feeds/comment/' + feedId, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZGVoZ2hhbiIsInBhc3N3b3JkIjoiJDJiJDEwJFF5TjBUVGhjdHUzWmVBNmsvVkEzVk9kQ2NnOGFjMy5BV25JeVJ1ay4wTXUzZEEyaE52S0RhIiwiaWF0IjoxNTk3OTc1NDY4LCJleHAiOjE1OTc5Nzg0Njh9.P-hti6sWwJVHtsb5KhhQ6WFoXELnkHl7HnQ4M1dKPRs',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }
};

export const bookmarkFeeds = async (feedId) => {
    const userId = fetchUserId();
    data = {
        userId: userId,
    };
    try {
        let response = await fetch('http://192.168.1.151:3000/feeds/bookmark/' + feedId, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhZGVoZ2hhbiIsInBhc3N3b3JkIjoiJDJiJDEwJFF5TjBUVGhjdHUzWmVBNmsvVkEzVk9kQ2NnOGFjMy5BV25JeVJ1ay4wTXUzZEEyaE52S0RhIiwiaWF0IjoxNTk3OTc1NDY4LCJleHAiOjE1OTc5Nzg0Njh9.P-hti6sWwJVHtsb5KhhQ6WFoXELnkHl7HnQ4M1dKPRs',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }
};