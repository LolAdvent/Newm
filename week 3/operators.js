const applePrice =0.49;

let pickedApples = 4

pickedApples += 10;
pickedApples -= 4;

const totalForApples= applePrice * pickedApples

console.log("Cost of Apples", totalForApples);

console.log("Way too many apples",pickedApples > 5)

//-----------------------------------------------------------------------------------
pickedApples -= 6;

console.log("Good to go", pickedApples < 5)
//-------------------------------------------------------------------------------
let rememberRouteHome = false;
console.log ("good to go home" , pickedApples > 5 && rememberRouteHome);

let haveAMap= true;

console.log("good to go home" , rememberRouteHome || haveAMap|| Boolean(""))
//-------------------------------------------------------------------
console.log("Total for Apples a number?", typeof totalForApples);
//-------------------------------------------------------------------------
console.log("string of 5:", typeof String(5), typeof 5);
//--------------------------------------------------------------------------------
let myAdress = "413"

myAdress += "Peach" +"St";

console.log("My Adress:", myAdress);
console.log("street name has st:", myAdress.toLocaleLowerCase().includes("st"));
console.log("My address", myAdress.replace("St","Street"))






