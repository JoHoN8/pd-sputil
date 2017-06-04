const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const packageData = require("./package.json");
const env  = require('yargs').argv.env;

let entryPoint = null;
let plugins = [];
let output = null;
let external = {
    "jquery": "$"
};

if (env === 'dev' || env === 'build') {
    entryPoint = './src/library.js';
    output = {
        path: path.resolve(__dirname, "./dist"),
        filename: `${packageData.name}.js`,
        libraryTarget: 'umd',
        library: 'pdsputil' //this will be the global variable to hook into
    };
}
if(env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
}
if(env === 'test') {
    entryPoint = './spUtil_tests.js';
    output = {
        path: path.resolve(__dirname, "./tests"),
        filename: "spUtil_tests.js",
    };
    external['./src/library.js'] = "pdsputil";
}

module.exports = {
    entry: entryPoint,
    output: output,
    module:{
        rules:[
            {  
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: plugins,
    externals: external,
    devtool: 'source-map'
};