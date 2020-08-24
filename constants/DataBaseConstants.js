export const SERVER_ADDRESS = "http://192.168.43.142:3000/";

export const FEED_LIST = [
    { id: '1', name: 'Item!' },
    { id: '2', name: 'Item@' },
    { id: '3', name: 'Item#' },
    { id: '4', name: 'Item$' },
    { id: '5', name: 'Item%' },
    { id: '6', name: 'Item^' },
    { id: '7', name: 'Item&' },
    { id: '8', name: 'Item*' },
    { id: '9', name: 'Item(' },
    { id: '10', name: 'Item)' },
    { id: '11', name: 'Item!!' },
    { id: '12', name: 'Item@@' },
    { id: '13', name: 'Item##' },
    { id: '14', name: 'Item$$' },
    { id: '15', name: 'Item%%' },
    { id: '16', name: 'Item^^' },
    { id: '17', name: 'Item&&' },
    { id: '18', name: 'Item**' },
    { id: '19', name: 'Item((' },
    { id: '20', name: 'Item))' },
];

export const FEEDS = [
    { newsId: '1', category: 'public', from: 'خبرگزاری فارس', logo: 'https://api.adorable.io/avatars/101', image: 'https://api.adorable.io/avatars/11', title: 'بیانات رهبر انقلاب', description: 'TEXT', likeNo: 2, commentsNo: 1, comments: [{ userid: '1', comment: 'text' },], date: 50 },
    { newsId: '2', category: 'setad', from: 'ستاد', logo: 'https://api.adorable.io/avatars/102', image: 'https://api.adorable.io/avatars/12', title: 'بیانات رهبر انقلاب', description: 'TEXT', likeNo: 2, commentsNo: 1, comments: [{ userid: '1', comment: 'text' },], date: 50 },
    { newsId: '3', category: 'internal', from: 'معاونت', logo: 'https://api.adorable.io/avatars/103', image: 'https://api.adorable.io/avatars/13', title: 'بیانات رهبر انقلاب', description: 'TEXT', likeNo: 2, commentsNo: 1, comments: [{ userid: '1', comment: 'text' },], date: 50 },
    { newsId: '4', category: 'public', from: 'خبرگزاری جوان', logo: 'https://api.adorable.io/avatars/104', image: 'https://api.adorable.io/avatars/14', title: 'بیانات رهبر انقلاب', description: 'TEXT', likeNo: 2, commentsNo: 1, comments: [{ userid: '1', comment: 'text' },], date: 50 },
    { newsId: '5', category: 'public', from: 'خبرگزاری جوان', logo: 'https://api.adorable.io/avatars/105', image: 'https://api.adorable.io/avatars/15', title: 'بیانات رهبر انقلاب', description: 'TEXT', likeNo: 2, commentsNo: 1, comments: [{ userid: '1', comment: 'text' },], date: 50 },
];

export const MAILS = [
    { mailId: '1', fromUserId: '1', toUserId: '2', title: 'TITLE', text: 'TEXT', date: 1234, isRead: true, isImportant: false },
    { mailId: '2', fromUserId: '2', toUserId: '1', title: 'TITLE', text: 'TEXT', date: 5678, isRead: true, isImportant: false },
    { mailId: '3', fromUserId: '2', toUserId: '1', title: 'TITLE', text: 'TEXT', date: 9101, isRead: true, isImportant: false },
];

export const CHATS = [
    { chatId: '1', userId1: '1', userId: '2', texts: [{ userId: '1', text: 'TEXT', date: 12345 }, { userId: '2', text: 'TEXT', date: 12345 }] }
]

export const GROUPS = [
    { groupId: '1', adminId: '1', users: ['1', '2', '3'], texts: [{ userId: '1', text: 'TEXT', date: 12345 }, { userId: '2', text: 'TEXT', date: 12345 }] }
]

export const CHANNELS = [
    { channelId: '1', adminId: '1', users: ['1', '2', '3',], texts: [{ text: 'TEXT', date: 12345 },] }
]

export const COURSES = [
    { courseId: '1', image: 'URL', title: 'TITLE', aboutCourse: 'TEXT', instructor: 'TEACHER', aboutInstructor: 'TEXT', instructorImage: 'URI', content: 'TEXT', date: 12345 }
]

export const USERS = [
    { userId: '1', bookmarkNews: ['1'], unreadMails: ['3'], importantMails: ['2'], chatIds: ['1', '2', '3'], bookmarkCourses: ['1', '2', '3'], bookmarkContent: ['1', '2', '3'] }
]