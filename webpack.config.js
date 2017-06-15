let webpack = require('webpack'),
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => ({
    entry: './index.js',
    output: {
        filename: 'assets/build.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['*', '.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]'
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(env)
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'index.template.html'),
            inject: 'body',
            title: 'Vue Filter Component'
        }),
        new ExtractTextPlugin('assets/theme.css')
    ]
});