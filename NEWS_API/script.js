const apiKey = "725d2bb531754fdf922b2e9012aac23e";

async function fetchNews(category) {
    const loadingMessage = document.getElementById('loading-message');
    const newsContainer = document.getElementById('news-container');

    loadingMessage.style.display = 'block'; // Show loading message
    newsContainer.innerHTML = ''; // Clear previous articles

    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`);
        const data = await response.json();

        if (data.articles.length === 0) {
            newsContainer.innerHTML = '<p>No news articles found.</p>';
        } else {
            data.articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');

                // Include the image if available
                const imgSrc = article.urlToImage ? article.urlToImage : 'default-image.jpg'; // Placeholder for missing images

                articleDiv.innerHTML = `
                    <img src="${imgSrc}" alt="${article.title}" class="article-image">
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank" class="read-more">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = '<p>Failed to fetch news articles. Please try again later.</p>';
    } finally {
        loadingMessage.style.display = 'none'; // Hide loading message
    }
}

function onNavItemClick(category) {
    fetchNews(category);
}
