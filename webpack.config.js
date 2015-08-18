var path = require("path");
var webpack = require("webpack");

//var react_path = path.join(node_modules, 'react', 'dist', 'react.js');
//var jquery_path = path.join(node_modules, 'jquery', 'dist', 'jquery.js');
var ROOT = path.resolve(__dirname);
var node_modules = path.resolve(ROOT, 'node_modules');

module.exports = {
    watch: false,
    entry: path.resolve(ROOT, 'static/entry.jsx'),
    output: {
        path: path.resolve(ROOT, "public"),
        filename: "bundle.js"
    },
    devServer: {
        colors: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.resolve(__dirname, 'static')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            //react: react_path,
            //jquery: jquery_path
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
