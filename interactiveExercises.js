// 1. Check user's age
let age = prompt("Indtast din alder:");
if (parseInt(age) >= 18) {
    console.log("Du er gammel nok til at stemme");
} else {
    console.log("Du er for ung til at stemme");
}

// 2. Validate username
let username = prompt("Indtast dit brugernavn:");
if (username === "admin") {
    console.log("Velkommen admin!");
} else {
    console.log("Ukendt bruger");
}

// 3. Determine price level
let price = prompt("Indtast prisen på varen:");
price = parseInt(price);
switch (true) {
    case price < 50:
        console.log("Budgetpris");
        break;
    case price <= 100:
        console.log("Mellemliggende pris");
        break;
    case price > 100:
        console.log("Luksuspris");
        break;
    default:
        console.log("Invalid price");
}

// 4. Calculate length
let unit = prompt("Vælg en enhed (meter, kilometer, mile):");
let length = parseFloat(prompt("Indtast en længde:"));
switch (unit) {
    case "meter":
        console.log(`${length} meter`);
        break;
    case "kilometer":
        console.log(`${length * 1000} meter`);
        break;
    case "mile":
        console.log(`${length * 1609.34} meter`);
        break;
    default:
        console.log("Ukendt enhed");
}

// 5. Determine student status
age = parseInt(prompt("Indtast din alder:"));
let isStudent = prompt("Er du studerende? (ja/nej)") === "ja";
if (age > 18 && isStudent) {
    console.log("Du er berettiget til studierabat");
} else {
    console.log("Du er ikke berettiget til studierabat");
}

// 6. Validate login
username = prompt("Indtast dit brugernavn:");
let password = prompt("Indtast din adgangskode:");
if (username === "admin" && password === "password") {
    console.log("Login succesfuld");
} else {
    console.log("Forkert brugernavn eller adgangskode");
}

// 7. Calculate area of a circle
let radius = parseFloat(prompt("Indtast radius af en cirkel:"));
if (radius > 0) {
    let area = Math.PI * radius * radius;
    console.log(`Arealet af cirklen er ${area}`);
} else {
    console.log("Radius skal være positiv");
}

// 8. Evaluate grade
let percent = parseFloat(prompt("Indtast din karakter i procent:"));
if (percent >= 90) {
    console.log("Din karakter er 12");
} else if (percent >= 80) {
    console.log("Din karakter er 10");
} else if (percent >= 70) {
    console.log("Din karakter er 7");
} else if (percent >= 60) {
    console.log("Din karakter er 4");
} else if (percent >= 50) {
    console.log("Din karakter er 02");
} else {
    console.log("Din karakter er 00");
}

// 9. Determine the largest number
let num1 = parseFloat(prompt("Indtast første tal:"));
let num2 = parseFloat(prompt("Indtast andet tal:"));
let num3 = parseFloat(prompt("Indtast tredje tal:"));
let largest = Math.max(num1, num2, num3);
console.log("Det største tal er " + largest);

// 10. Determine the season
let month = parseInt(prompt("Indtast måneden (som et tal fra 1 til 12):"));
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Vinter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Forår");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Sommer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Efterår");
        break;
    default:
        console.log("Ugyldigt månedstal");
}
