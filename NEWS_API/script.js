const API_KEY = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
const url = "https://newsapi.org/v2/everything?q=";

let isFetching = false;
let curSelectedNav = null;
let debounceTimeout;

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    if (isFetching) return; // Prevent multiple requests
    isFetching = true;
    
    const loadingMessage = document.getElementById("loading-message");
    loadingMessage.style.display = "block";
    
    try {
        const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);

        if (res.status === 429) {
            alert("You've made too many requests. Please wait a moment before trying again.");
            return;
        }

        if (!res.ok) {
            alert("Failed to fetch news articles.");
            return;
        }

        const data = await res.json();
        bindData(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
        alert("An error occurred while fetching news articles.");
    } finally {
        isFetching = false;
        loadingMessage.style.display = "none";
    }
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value.trim();
    if (!query) return;

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        fetchNews(query);
        curSelectedNav?.classList.remove("active");
        curSelectedNav = null;
    }, 500); // Adjust debounce time as needed
});
