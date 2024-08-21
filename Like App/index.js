let likeCount = Number(localStorage.getItem('like-count')) || 0;
let shareCount = Number(localStorage.getItem('share-count')) || 0;

let commentCount = Number(sessionStorage.getItem('comment-count')) || 0;
let bookmarkCount = Number(sessionStorage.getItem('bookmark-count')) || 0;

const uiMaker = () => {
    document.getElementById('likes-count').textContent = likeCount;
    document.getElementById('comment-count').textContent = commentCount;
    document.getElementById('share-count').textContent = shareCount;
    document.getElementById('bookmark-count').textContent = bookmarkCount;
};

uiMaker();

const handleLike = () => {
    likeCount++;
    localStorage.setItem('like-count', likeCount);
    uiMaker();
};

const handleComment = () => {
    commentCount++;
    sessionStorage.setItem('comment-count', commentCount);
    uiMaker();
};

const handleShare = () => {
    shareCount++;
    localStorage.setItem('share-count', shareCount);
    uiMaker();
};

const handleBookmark = () => {
    bookmarkCount++;
    sessionStorage.setItem('bookmark-count', bookmarkCount);
    uiMaker();
};

document.getElementById('like-btn').addEventListener('click', handleLike);
document.getElementById('comment-btn').addEventListener('click', handleComment);
document.getElementById('share-btn').addEventListener('click', handleShare);
document.getElementById('bookmark-btn').addEventListener('click', handleBookmark);
