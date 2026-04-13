export default class FavouritesManager {
    static save(pair) {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.push(pair);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    static getAll() {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    }
}