var path = require("path");
var pack = require("webpack");

module.exports = {
    watch: true,
    entry: './static/entry.jsx',
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: ['', 'js', 'jsx'],
        alias: {
            react: __dirname + '/node_modules/react/dist/react.js'
        }
    }
};
