// №7
let n = Math.floor(Math.random() * 60);

if (n >= 0 && n <= 15) {
    console.log ("ex№7   " + n + " min - Первая четверть часа");
}

else if (n > 15 && n <= 30) {
    console.log ("ex№7   " + n + " min - Вторая четверть часа");
}

else if (n > 30 && n <= 45) {
    console.log ("ex№7   " + n + " min - Третья четверть часа");
}

else {
    console.log ("ex№7   " + n + " min - Четвертая четверть часа");
}; 

console.log ("");