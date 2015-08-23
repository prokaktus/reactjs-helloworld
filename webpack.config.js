var path = require("path");
var webpack = require("webpack");

//var react_path = path.join(node_modules, 'react', 'dist', 'react.js');
//var jquery_path = path.join(node_modules, 'jquery', 'dist', 'jquery.js');
var ROOT = path.join(__dirname);
var node_modules = path.resolve(ROOT, 'node_modules');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:9000', 
        'webpack/hot/only-dev-server',
        path.join(ROOT, 'static/entry.jsx')
    ],
    output: {
        path: path.join(ROOT, "public"),
        filename: "bundle.js",
        publicPath: "http://localhost:9000/"
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
        moduleDirectories: ['node_modules']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
        <div></div>    jQuery: "jquery"
        })
    ]
};
