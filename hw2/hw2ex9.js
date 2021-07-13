let days = Math.floor(Math.random() * 1000) + 1,
    years =  Math.floor(days / 365),
    month = Math.floor(days / 31),
    weeks = Math.floor(days / 7),
    hours = Math.floor(days * 24),
    minuts = Math.floor(days * 24 * 60),
    seconds = Math.floor(days * 24 * 60 * 60);

    /*
console.log(years + " лет, " + month + " месяцев, " + weeks + " недель, " + hours + " часов, " + minuts + " минут, " + seconds + " секунд.");
*/

if (years >= 1 ){
    console.log("ex№9   " + years + " лет, " + month + " месяцев, " + weeks + " недель, " + hours + " часов, " + minuts + " минут, " + seconds + " секунд.");
} else if (years == 0 && month > 1) {
        console.log("ex№9   " + "Меньше года, " + month + " месяцев, " + weeks + " недель, " + hours + " часов, " + minuts + " минут, " + seconds + " секунд.");
} else if (month < 1 && days > 7) {
    console.log("ex№9   " + "Меньше года, меньше месяца, " + weeks + " недель, " + hours + " часов, " + minuts + " минут, " + seconds + " секунд.");
} else if (month < 1 && days < 7) {
    console.log("ex№9   " + "Меньше года, меньше месяца, меньше недели, " + hours + " часов, " + minuts + " минут, " + seconds + " секунд.");
};

console.log ("");
