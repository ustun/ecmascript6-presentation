// Spread -- Nutella operatoru
console.log(Math.max([12, 1, -19, 25]));
console.log(Math.max(12, 1, -19, 25));


var nums = [12, 1, -19, 25];

console.log(Math.max(nums));

console.log(Math.max.apply(Math, nums));

console.log(Math.max(...nums));
