console.log("Lets talk arrays");

const zodiacSigns =[
    "Leo",
    "Cancer",
    "Aquaris",
    "Libra",
    "Sagittarus",
    "Taurus",
    "Virgo",
    "Pisces",
    "Aries",
    "Capricorn",
];

console.log("ZodiacSigns", zodiacSigns);

console.table(zodiacSigns);
console.log("2nd Zodiac:", zodiacSigns[1]);
console.log("# of Zodiacs:", zodiacSigns.length);

const zodiacSignsUlRef = document.getElementById("Zodiac-signs");
for (let i= 0; i<zodiacSigns.length; i++) {
    console.log("For Loop:", zodiacSigns[i]);
    zodiacSignsUlRef.innerHTML += "<li>" + zodiacSigns[i] + "</li>";
}

let whileI=0
while( whileI < zodiacSigns.length){
    console.log("while loop:", zodiacSigns[whileI]);
    whileI++;
}

let whileDoI = 0
do{
    whileDoI++;
} while (whileDoI < zodiacSigns.length);


const gradStatsSectionRef = document.querySelector("#grade-stats");
const grades = [21,2,20,40,10,60,57,39,17,99];

