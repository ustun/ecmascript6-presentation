var x = {
    name: "Ustun",
    hello: function () {
        var helper = function () {
            console.log("I'm  ", this.name);
        };

        helper();

    }
};
try {
    x.hello();
} catch (e) {
    console.error(e);
}


var x = {
    name: "Ustun",
    hello: function () {
        var that = this;
        var helper = function () {
            console.log("I'm  ", that.name);
        };

        helper();

    }
};
x.hello();


var x = {
    name: "Ustun",
    hello: function () {
        var helper = function () {
            console.log("I'm  ", this.name);
        }.bind(this);

        helper();

    }
};
x.hello();


var x = {
    name: "Ustun",
    hello() {
        var helper = () => console.log("I'm  ", this.name);

        helper();

    }
};
x.hello()
