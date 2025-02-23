//your code here
document.addEventListener("DOMContentLoaded", function () {
    function calculateTotal() {
        let prices = document.querySelectorAll('[data-ns-test="prices"]');
        let total = 0;

        prices.forEach(price => {
            total += Number(price.textContent);
        });

        let table = document.querySelector("table");
        let existingTotalRow = document.querySelector('[data-ns-test="grandTotal"]');

        if (existingTotalRow) {
            existingTotalRow.textContent = total;
        } else {
            let newRow = document.createElement("tr");
            let newCell = document.createElement("td");

            newCell.setAttribute("colspan", "3");
            newCell.setAttribute("data-ns-test", "grandTotal");
            newCell.textContent = total;

            newRow.appendChild(newCell);
            table.appendChild(newRow);
        }
    }

    calculateTotal();
});
