var age, name, location, ustun, ahmet, insan1, insan2;

age = 30;
name = "Ustun";
location = "Ankara";

ustun = {name: name, age: age, location: location};
console.log(ustun);

age = 45;
name = "Ahmet";
location = "Antalya";

ahmet = {name, age, location};
console.log(ahmet);

name = age = location = null;


var {name, age, location} = ahmet; // works
// {name, age, location} = ahmet; // DOES NOT WORK
({name, age, location}) = ahmet; // works


console.log("name", name, "age", age, "location", location);


var {name: ad, age: yas} = ustun;

console.log("ad", ad, "yas", yas);

name = "ön ad";

insan1 = {name: "Ali"};

insan2 = {[name]: "Ali"};

console.log(insan1, insan2);


// Derin destructuring
var {adres: {postaKodu: postaKodu}} = {isim: 'Ustun',
                                       adres: {sehir: 'Ankara',
                                               postaKodu: '06800'}};


console.log("postaKodu", postaKodu);


// Array destructuring

var [renk1, renk2] = ["kirmizi", "beyaz"];


console.log("renk1", renk1);
console.log("renk2", renk2);

var [renk1, renk2] = ["kirmizi", "mavi", "beyaz"];
console.log("renk1", renk1);
console.log("renk2", renk2);

var [renk1, ...kalanRenkler] = ["kirmizi", "mavi", "beyaz"];

console.log("renk1", renk1);
console.log("kalanRenkler", kalanRenkler);
