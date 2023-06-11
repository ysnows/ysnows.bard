const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    target: 'node',
    mode: 'production',
    entry: './src/index.js', // 您的项目入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    externals: [nodeExternals()],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    resolve: {
        fallback: { "http": false }
    }
};
