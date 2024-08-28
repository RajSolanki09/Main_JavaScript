let signUpData = JSON.parse(localStorage.getItem('signUp')) || [];
let newsData = JSON.parse(localStorage.getItem('newsData')) || [];

const displaySignUp = (signUpData) => {

    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = "";

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

const displayNews = (newsData) => {

    const newsDataDiv = document.getElementById('newsData');
    newsDataDiv.innerHTML = "";

    newsData.map((ele, index) => {
        let title = document.createElement("h3");
        title.textContent = ele.title;

        let img = document.createElement("img");
        img.src = ele.image;

        let description = document.createElement("p");
        description.textContent = ele.description;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            newsData.splice(index, 1);
            localStorage.setItem('newsData', JSON.stringify(newsData));
            displayNews(newsData);
        };

        let div = document.createElement("div");
        div.append(title, img, description, deleteBtn);

        newsDataDiv.append(div);
    });
};

displaySignUp(signUpData);
displayNews(newsData);