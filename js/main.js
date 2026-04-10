import APIService from "./APIService.js";
import UIController from "./UIController.js";

const form = document.getElementById("currencyForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const amount = document.getElementById("amount").value;
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;

    const rate = await APIService.getExchangeRate(from, to);

    const result = amount * rate;

    UIController.displayResult(result, to);
});

function saveConversion(amount, from, to, result) {
    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.push({
        amount,
        from,
        to,
        result,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("history", JSON.stringify(history));
}