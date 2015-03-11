var myObject = {

    doThis: function () {

        var aLocalFunction = () => {
            console.log("calling doThat");
            this.doThat();
        };

        aLocalFunction();
    },

    doThat: function () {
        console.log("do that is called");
    }

};


myObject.doThis();
