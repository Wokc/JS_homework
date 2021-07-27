/* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены. */

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));

// // 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// // дату в формат 31/12/2025.

let date = "2025-12-31";

console.log(date.replace(/([0-9]+)(-)([0-9]+)(-)([0-9]+)/g, '$5/$3/$1'));

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

str = "Я учу javascript!";

console.log(str.substring(0,1), str.substr(0, 1), str.slice(0,1));

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for(let i = 0; i < arr.length; i++){
    sum += Math.pow(arr[i], 3);
}

let sqrtSum = Math.sqrt(sum);

console.log(sqrtSum);

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

let a = 3,
    b = 5;

// a = 6,
// b = 1; 

let c = Math.abs(a - b);

console.log(c);

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

let opt = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};

let dateNow = new Date();
dateNow = dateNow.toLocaleString(opt);

console.log(dateNow.replace(/(\d+.\d+.\d+)(, )(\d+:\d+:\d+)/g, '$3 $1'));

/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'. */

str = "aa aba abba abbba abca abea";
let aba = /a(b+)a/g;
console.log(aba.test(str));
console.log(str.match(aba));

// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.
/*
let phone = '375 29 325 18 17'; //true
let phone1 = '+375 29 569 85 12'; // true
let phone2 = '375296687817';    // true
let phone3 = '+ 37529 896 33 14'; //true
let phone4 = '375 33 666-77-88'; // true
let phone5 = 'ABC 33 666-77-88'; // false
let phone6 = '375 33ad666-77-88'; // false
let phone7 = '+ ads375 33 666-77-88'; // false



function testPhone (phone) {
    /[0-9]{9,12}/g.test(phone);
    let c = /[0-9]{9,12}/g.test(phone);
    return c;
}

console.log(testPhone(phone)); //true
console.log(testPhone(phone1)); //true
console.log(testPhone(phone2));//true
console.log(testPhone(phone3)); //true
console.log(testPhone(phone4)); //true
console.log(testPhone(phone5)); // false
console.log(testPhone(phone6)); // false
console.log(testPhone(phone7)); // false


*/


/*
console.log(rightPhone.test(phone));
console.log(rightPhone.test(phone1));
console.log(rightPhone.test(phone2));
console.log(rightPhone.test(phone3));
console.log(rightPhone.test(phone4));
console.log(rightPhone.test(phone5));
console.log(rightPhone.test(phone6));
console.log(rightPhone.test(phone7));*/

// 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия:
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов.
// Функция должна возвращать true или false. Используйте регулярные
// выражения.



// 10. Напишите ф-цию, которая из полного адреса с параметрами и без,
// например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
// доменного имени (https://tech.onliner.by), остальную часть адреса без
// параметров (/2018/04/26/smart-do-200/), параметры
// (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
// может и не быть каких-либо составляющих. Ф-ция должна возвращать
// массив.


function adressCHeck (address) {

        DomenName = address.match(/.*(?:\.by)/);

        if (/\/\?/gi.test(address)) {
            DomenPath = address.match(/(?<=.by)(.*)(?=\?)/);
        }
        else {
            DomenPath = address.match(/(?<=.by)(.*)/);
        };
        
        
        if (/#/gi.test(address)) {
            Parametrs = address.match(/(?:\?.*)(?=#)/);
        } 
        else {
            Parametrs = address.match(/(?:\?.*)/);
        };
        
        hash = address.match(/(?:#.*)/);    


        return Addres = [DomenName, DomenPath, Parametrs, hash];

};

adressCHeck('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');

console.log(Addres);