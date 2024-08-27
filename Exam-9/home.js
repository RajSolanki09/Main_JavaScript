// Function to display user data
const displaySignUp = (signUpData) => {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = ""; // Clear existing content

    signUpData.forEach((user) => {
        let img = document.createElement("img");
        img.src = user.img;

        let name = document.createElement("h2");
        name.textContent = user.name;

        let div = document.createElement("div");
        div.append(img, name);

        userDataDiv.append(div);
    });
};

// Function to display news data
const displayNews = (newsData) => {
    const newsDataDiv = document.getElementById('newsData');
    newsDataDiv.innerHTML = ""; // Clear existing content

    newsData.forEach((news) => {
        let title = document.createElement("h3");
        title.textContent = news.title;

        let img = document.createElement("img");
        img.src = news.image;

        let description = document.createElement("p");
        description.textContent = news.description;

        let div = document.createElement("div");
        div.append(title, img, description);

        newsDataDiv.append(div);
    });
};

// Initial display when home page loads
document.addEventListener('DOMContentLoaded', () => {
    const signUpData = JSON.parse(localStorage.getItem('signUp')) || [];
    const newsData = JSON.parse(localStorage.getItem('newsData')) || [];
    displaySignUp(signUpData);
    displayNews(newsData);
});
