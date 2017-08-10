//var path = require("path");

var config = {

    entry: "./src/main.js",

    output:{
        path : __dirname + './dist/',
        filename:"index.js"
    },

    devServer:{
        inline:true,
        port:8086
    },

    module:{
        loaders:[
            {
                test:/\.jsx?/,
                exclude: /node_modules/,
                loaders:"babel-loader",

                query:{
                    presets:["es2015","react"]
                }

            }
        ]
    }

}

module.exports = config;