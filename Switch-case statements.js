// 6. Check a variable 'day' and log the day of the week
let day = 3;
switch (day) {
    case 1:
        console.log("Mandag");
        break;
    case 2:
        console.log("Tirsdag");
        break;
    case 3:
        console.log("Onsdag");
        break;
    case 4:
        console.log("Torsdag");
        break;
    case 5:
        console.log("Fredag");
        break;
    case 6:
        console.log("Lørdag");
        break;
    case 7:
        console.log("Søndag");
        break;
    default:
        console.log("Ugyldig dag");
}

// 7. Log the grade in a Danish grading format
let grade = 'A';
switch (grade) {
    case 'A':
        console.log("12");
        break;
    case 'B':
        console.log("10");
        break;
    case 'C':
        console.log("7");
        break;
    default:
        console.log("Anden karakter");
}

// 8. Check a variable 'fruit' and log a message based on the chosen fruit
let fruit = "banan";
switch (fruit) {
    case "æble":
        console.log("Æbler er sunde");
        break;
    case "banan":
        console.log("Bananer er rige på kalium");
        break;
    case "appelsin":
        console.log("Appelsiner er gode for vitamin C");
        break;
    default:
        console.log("Ukendt frugt");
}

// 9. Check a variable 'month' and log the number of days in the selected month
let month = "Februar";
switch (month) {
    case "Januar":
    case "Marts":
    case "Maj":
    case "Juli":
    case "August":
    case "Oktober":
    case "December":
        console.log("31 dage");
        break;
    case "April":
    case "Juni":
    case "September":
    case "November":
        console.log("30 dage");
        break;
    case "Februar":
        console.log("28 eller 29 dage");
        break;
    default:
        console.log("Ugyldig måned");
}

// 10. Check a variable 'vehicle' and log a message depending on the type of vehicle
let vehicle = "cykel";
switch (vehicle) {
    case "bil":
        console.log("Kør forsigtigt i bilen");
        break;
    case "cykel":
        console.log("Husk din cykelhjelm");
        break;
    case "bus":
        console.log("Busser er gode for miljøet");
        break;
    default:
        console.log("Ukendt køretøjstype");
}
