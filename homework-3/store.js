// Declare constants for fixed values
const itemPrice = 40.99;  
const salesTax = 0.07;    
const discountRate = 0.10; 
const discountThreshold = 50; 

// Calculate total price after tax
const totalAfterTax = itemPrice * (1 + salesTax);

// Check if the item qualifies for the discount
const isEligibleForDiscount = itemPrice > discountThreshold;

// Calculate the discounted total after tax (only if eligible)
const discountedTotalAfterTax = isEligibleForDiscount 
    ? totalAfterTax * (1 - discountRate) 
    : totalAfterTax;

// Log outputs to the console
console.log("Total after tax: $" + totalAfterTax.toFixed(2));
console.log("Is the item eligible for a discount? " + isEligibleForDiscount);
console.log("Discounted total after tax: $" + discountedTotalAfterTax.toFixed(2));
