// Default Parameters

var oldGreet = function (name, language) {
    language = language || "en";

    let greeting = {
        en: "Hello",
        tr: "Merhaba",
        de: "Hallo"
    };

    console.log(greeting[language] + " " + name);

}

let newGreet = function (name, language="en") {

    let greeting = {
        en: "Hello",
        tr: "Merhaba",
        de: "Hallo"
    };

    console.log(greeting[language] + " " + name);

};

oldGreet("Ustun");

oldGreet("Ustun", "tr");

newGreet("Ozgur");

newGreet("Ozgur", "tr");
