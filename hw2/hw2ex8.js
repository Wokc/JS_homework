// №8

let day = Math.floor(Math.random() * 32) + 1;


if (day >= 0 && day <= 10) {
    console.log ("ex№8   " + day + " day - Первая декада месяца");
} else if (day > 10 && day <= 20) {
    console.log ("ex№8   " + day + " day - Вторая декада месяца");
} else {
    console.log ("ex№8   " + day + " day - Третья декада месяца");
}

console.log ("");