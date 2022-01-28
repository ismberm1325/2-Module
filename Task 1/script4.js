document.write("Интернет магазин сувениров и безделушек"+"<br>");
let a = prompt("Введите кол-во купленных сувениров");
let b = prompt("Введите кол-во купленных безделушек");
document.write("Количечство введенных вами сувениров:"+ a+"<br>");
document.write("Количечство введенных вами безделушек:"+ b+"<br>");

let WeightOfProduct = (a*75) + (b*112);

document.write("<br>" + "Общий вес посылки:" + WeightOfProduct + "гр");