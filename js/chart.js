import APIService from "./APIService.js";

const ctx = document.getElementById("trendChart");

init();

async function init() {
    const from = "USD";
    const to = "EUR";

    const data = await APIService.getHistoricalRates(from, to);

    const labels = Object.keys(data);
    const values = Object.values(data).map(d => d[to]);

    new Chart(ctx, {
        type: "line",
        data: {
            labels,
            datasets: [
                {
                    label: `${from} → ${to}`,
                    data: values,
                    tension: 0.3
                }
            ]
        }
    });
}