// Rest Parameters

function ornek(ilkSayi, ...kalanSayilar) {
    console.log("ilkSayi", ilkSayi);
    console.log("kalanSayilar", kalanSayilar);
    console.log(Array.isArray(kalanSayilar), Array.isArray(arguments))

}

ornek(1, 2, 3, 4);

ornek(4, 5, 6, 7, 8);



// Rest Params 3. Ornek

var hesapla = function (islem, ...sayilar) {
    var islemler = {
        '-': (a, b) => a-b,
        '+': (a, b) => a+b,
        '*': (a, b) => a*b
    };

    var ilkDeger = {'-': 0, '+': 0, '*': 1};

    return sayilar.reduce(islemler[islem], ilkDeger[islem]);
};



console.log(hesapla('+', 1, 2, 3, 4, 5));
console.log(hesapla('*', 1, 2, 3, 4, 5));
console.log(hesapla('-', 1, 2, 3, 4, 5));
