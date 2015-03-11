var x = {
    ad: "Ustun",
    merhaba: function () {
        var helper = function () {
            console.log("Adım ", this.ad);
        };

        helper();

    }
};
try {
    x.merhaba();
} catch (e) {
    console.error(e);
}


var x = {
    ad: "Ustun",
    merhaba: function () {
        var that = this;
        var helper = function () {
            console.log("Adım ", that.ad);
        };

        helper();

    }
};
x.merhaba();


var x = {
    ad: "Ustun",
    merhaba: function () {
        var helper = function () {
            console.log("Adım ", this.ad);
        }.bind(this);

        helper();

    }
};
x.merhaba();


var x = {
    ad: "Ustun",
    merhaba() {
        var helper = () => console.log("Adım ", this.ad);

        helper();

    }
};
x.merhaba()
