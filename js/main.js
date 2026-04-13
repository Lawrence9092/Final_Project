import APIService from "./APIService.js";
import UIController from "./UIController.js";

const form = document.getElementById("currencyForm");
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");

init();

async function init() {
    const rates = await APIService.getLatestRates("USD");

    Object.keys(rates).forEach(currency => {
        const option1 = new Option(currency, currency);
        const option2 = new Option(currency, currency);

        fromSelect.add(option1);
        toSelect.add(option2);
    });

    fromSelect.value = "USD";
    toSelect.value = "EUR";
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (!amount) return;

    const rate = await APIService.getExchangeRate(from, to);
    const result = amount * rate;

    UIController.displayResult(result, to);
    saveConversion(amount, from, to, result);
});

function saveConversion(amount, from, to, result) {
    const history = JSON.parse(localStorage.getItem("history")) || [];

    history.unshift({
        amount,
        from,
        to,
        result,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("history", JSON.stringify(history));
}