const path = require('path');
const webpack = require('webpack');
const packageData = require("./package.json");
const env  = require('yargs').argv.env;

let entryPoint = './src/library.js';
let plugins = [];
let output = null;
let external = {};

if (env === 'dev' || env === 'build') {
    entryPoint = './src/library.js';
    output = {
        path: path.resolve(__dirname, "./dist"),
        filename: `${packageData.name}.js`,
        libraryTarget: 'umd',
        library: 'pdsputil' //this will be the global variable to hook into
    };

    external.jquery = {
        commonjs: 'jquery',
        commonjs2: 'jquery',
        amd: 'jquery',
        root: '$'
    };
}
if(env === 'build') {
    output.filename = `${packageData.name}.min.js`;

    const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    let prodTrigger = new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    });
    plugins.push(prodTrigger, new UglifyJsPlugin());
}
if(env === 'test') {
    entryPoint = './project_tests.js';
    output = {
        path: path.resolve(__dirname, "./tests"),
        filename: "spUtil_tests.js",
    };
}

module.exports = {
    entry: entryPoint,
    output: output,
    module:{
        rules:[
            {  
                test: /\.js$/,
                //exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                             ['es2015', {modules: false}]
                        ]
                    }
                }
            }
        ]
    },
    plugins: plugins,
    externals: external,
    //devtool: 'source-map'
};

