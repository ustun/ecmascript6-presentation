// require("babel/polyfill");

let foo = (a, b) => a + b

var x = 4;

var u = "ustun";

if (u.endsWith == "un") {

    console.log("ok ends with");

}
console.log(`Hello ${1+3}`);

let calculate = () => {
    let j = 10;
    for (let i = 0; i < 10; i++) {
        let j = i + 5;
        console.log("i", j);

    }




}

let j = 11;


console.log("0", j, foo(3,4));


var name = "Ustun";
var age = 30;


var Animal = function () {};

Object.assign(Animal.prototype, {havla: () => "havliyor"});

    var human = {name,

             ["first" + "name" + (Math.random() * 100).toFixed(0)]: "Ustun",
             age,
             hello() {
                 console.log("hello there");
             },
             toString() {
                 return `Hello my name is ${this.name} and my age is ${this.age}`;
             }
};

console.log(String(human), human);


    var takimlar = new Set();
takimlar.add("Besiktas").add("Fenerbahce").add("Galatasaray").add("Besiktas");
console.log(takimlar.size)


    var sehirler = new Map();
sehirler.set("06", "Ankara");
sehirler.set("34", "Istanbul");
sehirler.set(human, human.toString())
console.log(sehirler.get("34"), sehirler.get("35", "foo"), sehirler.get(human))
