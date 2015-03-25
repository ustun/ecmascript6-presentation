require("babel/polyfill");

var makeAjaxCall = function (url, cb) {
    setTimeout(function () {
        cb("Result for " + url);
    }, 100);

};

function request(url) {
    // this is where we're hiding the asynchronicity,
    // away from the main code of our generator
    // `it.next(..)` is the generator's iterator-resume
    // call
    makeAjaxCall( url, function(response){
        it.next( response );
    } );
    // Note: nothing returned here!
}

var main = function *() {
    var result1 = yield request( "http://some.url.1" );
    var data = encodeURIComponent(result1.toUpperCase());

    var result2 = yield request( "http://some.url.2?id=" + data );
    var resp = result2;
    console.log( "The value you asked for: " + resp );
};

var it = main();
it.next(); // get it all started
