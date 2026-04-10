const history = JSON.parse(localStorage.getItem("history")) || [];
const tbody = document.querySelector("#historyTable tbody");

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