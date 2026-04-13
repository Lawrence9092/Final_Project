export default class CurrencySelector {
    static getSelectedCurrencies() {
        return {
            from: document.getElementById("fromCurrency").value,
            to: document.getElementById("toCurrency").value
        };
    }
}