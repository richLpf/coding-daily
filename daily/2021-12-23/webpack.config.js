const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.min.js',
    },
    mode: 'development',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [{ 
            test: /\.tsx?$/, 
            loader: "awesome-typescript-loader" 
        }]
    },
    devServer: {
        port: 9000
    }
};