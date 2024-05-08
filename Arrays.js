// 1. Create an empty array.
let emptyArray = [];
console.log("Empty Array:", emptyArray);

// 2. Create an array with names of your three favorite fruits.
let favoriteFruits = ["Apple", "Banana", "Cherry"];
console.log("Favorite Fruits:", favoriteFruits);

// 3. Access the 2nd element in an array.
let secondFruit = favoriteFruits[1]; // Indexes start at 0, so index 1 is the second element.
console.log("Second Fruit:", secondFruit);

// 4. Change the value of the third element in an array.
favoriteFruits[2] = "Mango"; // Changes "Cherry" to "Mango"
console.log("Updated Fruits:", favoriteFruits);

// 5. Add a new element to the end of an array.
favoriteFruits.push("Kiwi");
console.log("Added Kiwi:", favoriteFruits);

// 6. Remove the first element from an array.
let firstFruit = favoriteFruits.shift();
console.log("Removed First Fruit:", firstFruit);
console.log("After Removal:", favoriteFruits);

// 7. Find the index of a specific element in an array.
let indexKiwi = favoriteFruits.indexOf("Kiwi");
console.log("Index of Kiwi:", indexKiwi);

// 8. Create a new array by merging two existing arrays.
let vegetables = ["Tomato", "Cucumber", "Bell pepper"];
let fruitsAndVegetables = favoriteFruits.concat(vegetables);
console.log("Fruits and Vegetables:", fruitsAndVegetables);

// 9. Sort an array in ascending order.
let sortedFruits = [...favoriteFruits].sort(); // Using spread to copy and sort to avoid modifying the original array
console.log("Sorted Fruits:", sortedFruits);

// 10. Create a new array by copying an existing array.
let copiedFruits = [...favoriteFruits]; // Using the spread operator to copy the array
console.log("Copied Fruits:", copiedFruits);
