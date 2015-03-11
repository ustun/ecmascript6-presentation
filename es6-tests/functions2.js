var myObject = {

    doThis: function () {

        var that = this;
        var aLocalFunction = function () {
            console.log("calling doThat");
            that.doThat();

        };

        aLocalFunction();
    },

    doThat: function () {
        console.log("do that is called");

    }

};


myObject.doThis();
