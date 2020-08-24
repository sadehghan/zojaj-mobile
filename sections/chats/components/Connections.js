import { FEEDS, MAILS, USERS } from '../../../constants/DataBaseConstants';

export const fetchMails = async (category, thePage, limit) => {
    const USER_ID = '1';
    await setTimeout(() => { }, 15);

    if (category == 'ALL') {
        let user = USERS.find(element => element.userId == USER_ID);
        let mails = MAILS.filter(item => item.toUserId == USER_ID);

        let result = mails.map(item => {
            if (user.unreadMails.includes(item.mailId)) {
                item.isRead = false;
            }
            if (user.importantMails.includes(item.mailId)) {
                item.isImportant = true;
            }
            return item;
        });

        return result.slice((thePage - 1) * limit, thePage * limit);
    }

    if (category == 'UNREAD') {
        let user = USERS.find(element => element.userId == USER_ID);
        let result = MAILS.filter(item => item.toUserId == USER_ID && user.unreadMails.includes(item.mailId));
        return result.slice((thePage - 1) * limit, thePage * limit);
    }

    if (category == 'IMPORTANT') {
        let user = USERS.find(element => element.userId == USER_ID);
        let result = MAILS.filter(item => item.toUserId == USER_ID && user.importantMails.includes(item.mailId));
        return result.slice((thePage - 1) * limit, thePage * limit);
    }
};