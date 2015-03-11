require("babel/polyfill");

var ogrenciyiBul = new Promise(function (resolve, reject) {
    console.log("Ogrenci bulunuyor");

    setTimeout(function () {
        console.log("Ogrenci bulundu");
        resolve("Ustun");
    }, 1000);

});

var sinifiBul = new Promise(function (resolve, reject) {

    console.log("Sinif bulunuyor");

    setTimeout(function () {
        console.log("Sinif bulundu");
        resolve(5);
    }, 1000);

});


var okuluBul = new Promise(function (resolve, reject) {

    console.log("Okul bulunuyor");

    setTimeout(function () {
        resolve(5);
    }, 1000);

});


ogrenciyiBul
    .then(sinifiBul)
    .then(okuluBul)
    .then(function (okul) {
        console.log("Okul bulundu. No: " + okul);
    });



var search = function () {
    return new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();

        console.log("Arama sonlandi.");

    }, Math.random() * 1000);

    });
}

var search1 = function () {
    return new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();

        console.log("Arama1 sonlandi.");

    }, Math.random() * 1000);

    });
}

Promise.all([search(), search(), search()]).then(function () {
    console.log("Butun aramalar bitti");
});


Promise.race([search1(), search1(), search1()]).then(function () {
    console.log("Tek bir arama bitti");

});
