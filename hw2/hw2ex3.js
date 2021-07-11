let num1 = Math.floor(Math.random() * 9);
    num2 = Math.floor(Math.random() * 9);
    num3 = Math.floor(Math.random() * 9);
    num4 = Math.floor(Math.random() * 9);
    num5 = Math.floor(Math.random() * 9);
    num6 = Math.floor(Math.random() * 9);
    result = ((num1 + num2 + num3) == (num4 + num5 + num6)) ? "да" : "нет";

console.log("ex№3   " + num1 +  num2 + num3 + num4 + num5 + num6 + " сумма первых трех чисел = " + (num1 + num2 + num3) + " сумма последних трех чисел = " + (num4 + num5 + num6) + " Равны: " + result);

console.log("");
