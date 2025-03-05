const itemsUlRef = document.querySelector("#items");
const cartUlRef = document.querySelector("#cart");

const items= [
        "Apple","Orange", "Plum", "Pear", "Hairy Potato"
]

const cart = [];

for (let i = 0; i< items.length; i++) {
    const newLi = document.createElement("li");
    new.Li.innerText = items[i];
    //   itemsUlRef.innerHTML += "<li>";
    //   itemsUlRef.innerHTML += items[i];
    itemsUlRef.innerHTML += "<li>" + items [i] + "</li>";
}

