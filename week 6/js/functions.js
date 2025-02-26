function letsgo() {
    console.log("FUNctions Time!");
}
letsgo()

function calTotal(itemPrice, TaxRate) {
    if(itemPrice > 100){
        return itemPrice * (1 + TaxRate) * (1 - discountRate *2);
    }
    else if (itemPrice > 50){
        itemPrice * (1 + TaxRate) * (1 - discountRate );
    }
    else{
        return itemPrice * (1 + TaxRate);
    }
    
}

console.log ("kidney = $20, Tax Rate = 40%: " , calTotal(20, 0.4));

const items = [18,24,17,3];

function showItems() {
    const newSections = document.createElement("sections");
    newSections.innerHTML = "<h4>Items</h4>";

    let total = 0;
    for (let i=0; i < items.length; i++) {
        newSections.innerHTML += "<p>$" + items[i] + "</p";
        total += items[i];

    
    }
    newSections.innerHTML += "<hr />";
    newSections.innerHTML += "<p>$" + calTotal(total, 0.07) + "</p>";
    document.body.appendChild(newSections);
}

showItems;