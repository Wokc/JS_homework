// №10

// day = prompt ("введите день года (от 1 до 365)");

    day = Math.floor(Math.random() * 365) + 1;


switch (true){
    case (day > 0 && day <= 181):
        switch (true){
            case (day > 0 && day <= 90):
                switch (true) {
                    case (day > 0 && day <= 31):
                        console.log ("ex№10   " + day + " день года Первое полугодие, первый квартал - Январь, Зима");
                    break;
                    case (day > 31 && day <= 59):
                        console.log ("ex№10   " + day + " день года - Первое полугодие, первый квартал - Февраль, Зима");
                    break;
                    case (day > 59 && day <= 90):
                        console.log ("ex№10   " + day + " день года - Первое полугодие, первый квартал - Март, Весна");
                    break;
                }
            break;
            case (day > 90 && day <= 181):
                switch (true) {
                    case (day > 90 && day <= 120):
                        console.log ("ex№10   " + day + " день года - Первое полугодие, первторойвый квартал - Апрель, Весна");
                    break;
                    case (day > 120 && day <= 151):
                        console.log ("ex№10   " + day + " день года - Первое полугодие, второй квартал - Май, Весна");
                    break;
                    case (day > 151 && day <= 181):
                        console.log ("ex№10   " + day + " день года - Первое полугодие, второй квартал - Июнь, Лето");
                    break;
                }
            break;
        }
    break;
    case (day > 181 && day <= 365):
        switch (true){
            case (day > 181 && day <= 273):
                switch (true) {
                    case (day > 181 && day <= 212):
                        console.log ("ex№10   " + day + " день года - Второе полугодие, третий квартал - Июль, Лето");
                    break;
                    case (day > 212 && day <= 243):
                        console.log ("ex№10   " + day + " день года - Второе полугодие, третий квартал - Август, Лето");
                    break;
                    case (day > 243 && day <= 273):
                        console.log ("ex№10   " + day + " день года - Второе полугодие, третий квартал - Сентябрь, Осень");
                    break;
                }
            break;
            case (day > 273 && day <= 365):
                switch (true) {
                    case (day > 273 && day <= 304):
                        console.log ("ex№10   " + day + " день года - Второе полугодие, четвёртый квартал - Октябрь, Осень");
                    break;
                    case (day > 304 && day <= 334):
                        console.log ("ex№10   " + day + " день года - Второе полугодие, четвёртый квартал - Ноябрь, Осень");
                    break;
                    case (day > 334 && day <= 365):
                        console.log ("ex№10   " + day + " день года - Второе полугодие, четвёртый квартал - Декабрь, Зима");
                    break;
                }
            break;
        }
    break;
}