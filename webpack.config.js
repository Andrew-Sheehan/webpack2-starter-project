const path = require('path');

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, './src')]
    }  
};