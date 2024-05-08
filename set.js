// JavaScript Set Examples

// 1. Unique Words in Text:
// Create a Set containing the unique words in a given text string.
let text = "Hello, welcome to my blog. Hello to all my followers!";
let words = text.toLowerCase().replace(/[^\w\s]/gi, '').split(' ');
let uniqueWords = new Set(words);
console.log("Unique Words:", uniqueWords);

// 2. Favorite Colors:
// Create a Set that contains users' favorite colors.
let favoriteColors = new Set();
favoriteColors.add("Blue");
favoriteColors.add("Red");
favoriteColors.add("Green");
console.log("Favorite Colors:", favoriteColors);

// 3. Music Playlist:
// Create a Set that contains the titles of songs on a user's music playlist.
let playlist = new Set();
playlist.add("Bohemian Rhapsody - Queen");
playlist.add("Imagine - John Lennon");
playlist.add("Billie Jean - Michael Jackson");
console.log("Music Playlist:", playlist);

// 4. Unique Ingredients in a Recipe:
// Create a Set that contains the unique ingredients in a recipe.
let ingredients = new Set();
ingredients.add("Flour");
ingredients.add("Sugar");
ingredients.add("Butter");
console.log("Unique Ingredients:", ingredients);

// 5. Club Members:
// Create a Set that contains the names of members in a club.
let clubMembers = new Set();
clubMembers.add("Peter Hansen");
clubMembers.add("Lise Petersen");
console.log("Club Members:", clubMembers);
