let num1 = prompt("Введите любое число:");
let num2 = prompt("Введите второе любое число:");
let plus = (num1 + num2);
let minus = (num1 - num2);
let proizved = (num1 * num2);
let ost = (num1%num2);
let pow = Math.pow(num1,num2);


document.write("Сумма:"+ plus+"<br>");
document.write("Разность"  + minus+"<br>");
document.write("Произведение:"+ proizved+"<br>");
document.write("Остаток:"+ ost+"<br>");
document.write("Возведение в степень:"+ pow);

