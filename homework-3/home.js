// Declare the radius of the circle as a constant since it does not change
const radius = 5;

// Calculate the area using the formula: Area = PI * r^2
const area = Math.PI * Math.pow(radius, 2);

// Calculate the perimeter using the formula: Perimeter = 2 * PI * r
const perimeter = 2 * Math.PI * radius;

// Log the results to the console
console.log("The area of the circle is: " + area.toFixed(2));
console.log("The perimeter of the circle is: " + perimeter.toFixed(2));

/*
Explanation of Variable Declarations:
- `const radius`: The radius is a fixed value (5), so using `const` ensures it cannot be changed accidentally.
- `const area`: Since area is derived from a fixed radius, it remains constant after calculation.
- `const perimeter`: The perimeter is also derived from a fixed radius, so it remains constant as well.
*/
