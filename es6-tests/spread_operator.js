// Spread -- Nutella operatoru
console.log(Math.max([12, 1, -19, 25]));
console.log(Math.max(12, 1, -19, 25));


var sayilar = [12, 1, -19, 25];

console.log(Math.max(sayilar));

console.log(Math.max.apply(Math, sayilar));

console.log(Math.max(...sayilar));
