

// 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**

let a = 'ddd@bbb@ccc';
let b = a.replace(/@/g, '!');

console.log(b)

// 2. Дана строка **'js'**. Сделайте из нее строку **'JS'**.

let up = 'js';
console.log(up.toUpperCase())

//3 Дана строка 'JS'. Сделайте из нее строку 'js'.

let low = 'JS';
console.log(low.toLowerCase())

// 4. Дана строка**'I am a hero!'**. Выведите в консоль **количество символов** в этой строке.

let string = 'I am a hero!';

console.log(string.length)

// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
// Пример: "Номер вашей карты: **********1245"

let pinNum = prompt("Enter your number of card...");
document.write("The  number of your card is: " + pinNum.replace(pinNum, "******") + pinNum.slice(-4) +"<br>"+"<br>");