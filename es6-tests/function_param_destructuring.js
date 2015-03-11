// Input parameter destructuring
var greetings = {en: 'Hello', tr: 'Merhaba'};


var oldGreetingNoDestructuring = function (name, options) {
    var language = options.language;
    var uppercase = options.uppercase;

    var greeting = greetings[language] + " " + name;
    if (uppercase) {
        return greeting.toUpperCase();
    } else {
        return greeting;
    }


};


console.log(oldGreetingNoDestructuring('Ustun', {language: 'en'}));

console.log(oldGreetingNoDestructuring('Ustun', {language: 'en', uppercase: true}));

console.log(oldGreetingNoDestructuring('Ustun', {language: 'tr', uppercase: true}));


var newGreetingWithDestructuring = function (name, {language, uppercase}) {
    var greeting = greetings[language] + " " + name;
    if (uppercase) {
        return greeting.toUpperCase();
    } else {
        return greeting;
    }
};

console.log(newGreetingWithDestructuring('Ozgur', {language: 'en'}));

console.log(newGreetingWithDestructuring('Ozgur', {language: 'en', uppercase: true}));

console.log(newGreetingWithDestructuring ('Ozgur', {language: 'tr', uppercase: true}));
