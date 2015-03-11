
for (var i = 0; i<10; i++) {
    // do something
    ;
}
console.log(i);


for (let j = 0; i<10; i++) {
    // do something
}
// console.log(j); // does not work

function hoisting() {
    console.log(x);

    var x = 10;

    console.log(x);


}


hoisting();

function hoistingLet() {
//    console.log("hoisting", x);
    {

        let x = 10;
        console.log(x);
    }


}

hoistingLet ();


const age = 30;
// const age = 31; // does not work // Syntax error

const number = 10;
// number += 1; // does not work Syntax error
