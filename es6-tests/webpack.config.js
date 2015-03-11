var config = {

    entry: {
        test: './test.js'
    },
    output: {
        filename: "[name]_webpack.js"
    },
    externals: {
        "React": "React",
        "react": "React",
        "moment": "moment",
        "underscore": "_",
        "Backbone": "Backbone",
        "Handlebars": "Handlebars"
    },
    resolveLoader: {
        fallback: [__dirname + "/node_modules"]
    },


    cache: true,

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?experimental"}
        ]
    }

};

module.exports = config;
