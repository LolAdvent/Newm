// dom
const menuList = document.getElementById("menu");
const cartTable = document.getElementById("cart");
const noItemsRow = document.getElementById("no-items");

//array
const menuItems = [
    { name: "Hamburger", price: 2.99 },
    { name: "Cheeseburger", price: 3.99 },
    { name: "Cheese Pizza", price: 3.99 },
    { name: "Pepperoni Pizza", price: 4.99 },
    { name: "Sausage Pizza", price: 4.99 },
    { name: "Caesar Salad", price: 3.99 },
    { name: "Fries", price: 1.99 },
    { name: "Onion Rings", price: 2.49 }

];



//array
let cart = [];




//function for cart
function updateCart() {
    // Clear the table except for the header and no-items row
    cartTable.querySelectorAll("tr:not(:first-child):not(#no-items)").forEach(row => row.remove());

    if (cart.length === 0) {
        noItemsRow.style.display = "table-row";
    } else {
        noItemsRow.style.display = "none";
        let total = 0;


        // add rows for each item
        cart.forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><textarea data-index="${index}" class="special-request">${item.specialRequest}</textarea></td>
                <td><button data-index="${index}" class="remove">Remove</button></td>
            `;
            cartTable.appendChild(row);



            // Add tota
            total += item.price;




            // Update the specialrequest
            row.querySelector(".special-request").addEventListener("input", (event) => {
                const index = event.target.dataset.index;
                cart[index].specialRequest = event.target.value;
            });

            // Add click listener to remove button
            row.querySelector(".remove").addEventListener("click", () => {
                cart.splice(index, 1);
                updateCart();
            });
        });




        // Add the total row
        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `
            <td>Total</td>
            <td colspan="3">$${total.toFixed(2)}</td>
        `;
        cartTable.appendChild(totalRow);
    }
}




menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button data-item="${item.name}|${item.price}" class="add-item">+</button>`;
    menuList.appendChild(li);
});




menuList.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-item")) {
        const [name, price] = event.target.dataset.item.split("|");
        cart.push({ name, price: parseFloat(price), specialRequest: "" });
        updateCart();
    }
});



