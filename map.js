// 1. Tilføjelse af varepriser:
// Opret en Map, der indeholder navnene på forskellige varer som nøgler og deres priser som værdier.
let varepriser = new Map();
varepriser.set("Æbler", 20);
varepriser.set("Bananaer", 15);
varepriser.set("Appelsiner", 10);
console.log("Varepriser:", varepriser);

// 2. Administration af brugere:
// Opret en Map, der holder styr på brugernes information, herunder deres brugernavn, e-mail og alder.
let brugerInfo = new Map();
brugerInfo.set("bruger1", { brugernavn: "johndoe", email: "john@example.com", alder: 28 });
brugerInfo.set("bruger2", { brugernavn: "janesmith", email: "jane@example.com", alder: 32 });
console.log("Bruger Information:", brugerInfo);

// 3. Produktantal i lageret:
// Opret en Map, der holder styr på antallet af tilgængelige produkter i lageret.
let lagerStatus = new Map();
lagerStatus.set("T-shirts", 150);
lagerStatus.set("Bukser", 85);
lagerStatus.set("Jakker", 45);
console.log("Lager Status:", lagerStatus);

// 4. Bestemmelse af landes hovedstæder:
// Opret en Map, der indeholder landenes navne som nøgler og deres hovedstæders navne som værdier.
let hovedstæder = new Map();
hovedstæder.set("Danmark", "København");
hovedstæder.set("Tyskland", "Berlin");
hovedstæder.set("Frankrig", "Paris");
console.log("Hovedstæder:", hovedstæder);

// 5. Telefonbog:
// Opret en Map, der indeholder kontaktpersonernes navne som nøgler og deres telefonnumre som værdier.
let telefonbog = new Map();
telefonbog.set("Alice Johnson", "+45 1234 5678");
telefonbog.set("Bob Smith", "+45 8765 4321");
console.log("Telefonbog:", telefonbog);
