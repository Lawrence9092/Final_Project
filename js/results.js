import FavouritesManager from "./FavouritesManager.js";

const history = JSON.parse(localStorage.getItem("history")) || [];
const tbody = document.querySelector("#historyTable tbody");
const favList = document.getElementById("favoritesList");

history.forEach(item => {
    tbody.innerHTML += `
        <tr>
            <td>${item.date}</td>
            <td>${item.amount}</td>
            <td>${item.from}</td>
            <td>${item.to}</td>
            <td>${item.result}</td>
        </tr>
    `;
});

const favorites = FavouritesManager.getAll();

favorites.forEach(fav => {
    const li = document.createElement("li");
    li.textContent = `${fav.from} → ${fav.to}`;
    favList.appendChild(li);
});