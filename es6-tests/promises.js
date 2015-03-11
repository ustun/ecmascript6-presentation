require("babel/polyfill");

var findStudent = new Promise(function (resolve, reject) {
    console.log("Student is being searched...");

    setTimeout(function () {
        console.log("Student found");
        resolve("Ustun");
    }, 1000);

});

var findClass = new Promise(function (resolve, reject) {

    console.log("Classname is being searched...");

    setTimeout(function () {
        console.log("Classname found");
        resolve(5);
    }, 1000);

});


var findSchool = new Promise(function (resolve, reject) {

    console.log("School is being searched...");

    setTimeout(function () {
        resolve(5);
    }, 1000);

});


findStudent
    .then(findClass)
    .then(findSchool)
    .then(function (school) {
        console.log("School found. No: " + school);
    });



var search = function () {
    return new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();

        console.log("Search over.");

    }, Math.random() * 1000);

    });
}

var search1 = function () {
    return new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();

        console.log("Search1 over.");

    }, Math.random() * 1000);

    });
}

Promise.all([search(), search(), search()]).then(function () {
    console.log("All searches over");
});


Promise.race([search1(), search1(), search1()]).then(function () {
    console.log("A single search is over");

});
