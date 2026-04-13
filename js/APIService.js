const BASE_URL = "https://api.exchangerate.host";

export default class APIService {
    static async getExchangeRate(from, to) {
        const res = await fetch(`${BASE_URL}/convert?from=${from}&to=${to}`);
        const data = await res.json();
        return data.result;
    }

    static async getLatestRates(base = "USD") {
        const res = await fetch(`${BASE_URL}/latest?base=${base}`);
        const data = await res.json();
        return data.rates;
    }

    static async getHistoricalRates(from, to) {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 7);

        const format = d => d.toISOString().split("T")[0];

        const res = await fetch(
            `${BASE_URL}/timeseries?start_date=${format(start)}&end_date=${format(end)}&base=${from}&symbols=${to}`
        );

        const data = await res.json();
        return data.rates;
    }
}