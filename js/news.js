const newsContainer = document.getElementById("newsContainer");

async function fetchNews() {
    try {
        const response = await fetch(
            "https://newsapi.org/v2/everything?q=currency OR finance&sortBy=publishedAt&language=en&apiKey=2793c23aa6d941ad960431e10b37b689"
        );

        const data = await response.json();

        displayNews(data.articles);
    } catch (error) {
        newsContainer.innerHTML = "<p>Failed to load news.</p>";
        console.error("News API Error:", error);
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = "";

    articles.slice(0, 6).forEach(article => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");

        newsCard.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;

        newsContainer.appendChild(newsCard);
    });
}

fetchNews();