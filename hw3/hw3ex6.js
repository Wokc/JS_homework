// №6

t = 2;
k = 1;
let d;

for (; t < 11;) {
    console.log("Таблица умножения на " + t);
    for (; k < 11; k++) {
        d = t * k;
        console.log( t + " * " + k + " = " + d)
    };
    
    t = ++t;
    k = 1;

}

console.log("");