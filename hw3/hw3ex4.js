
a = 1;

let z,
    x;

for (; a < 6; a++) {
    z = a;
    x = 0;
    while (z != 0) {
        x += z;
        z--;
    }
    console.log ("ex4  cумма чисел " + a + " = " + x + ";");
};

console.log("");