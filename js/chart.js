new Chart(ctx, {
    type: "line",
    data: {
        labels: dates,
        datasets: [{
            label: "USD to EUR",
            data: rates
        }]
    }
});