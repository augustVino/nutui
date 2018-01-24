var webpack = require('webpack');
var path = require('path');
var config = require('./package.json');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

var webpackConfig = module.exports = {};
var isProduction = process.env.NODE_ENV === 'production';


webpackConfig.entry = {
    app: './src/app.js',
    demo: './src/demo.js',
    nutui:'./src/nutui.js'
};


webpackConfig.output = {
    path: path.resolve(__dirname, 'dist'),
    publicPath:"/",
    filename: '[name].js',
    library: 'nutui',
    libraryTarget: 'umd',
    umdNamedDefine: true
};

webpackConfig.module = {
    rules: [{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
    }, {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader', 'postcss-loader' ]
    }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            postcss: [autoprefixer()]
        }
    }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
    }, {
        test: /\.(png|jpg|gif|webp)$/,
        loader: 'url-loader',
        options: {
            limit: 3000,
            name: 'img/[name].[ext]',
        }
    }, ]
};

webpackConfig.plugins = [
    new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, './dist/index.html'),
        template: './src/index.html',
        chunks:['app']
    }),
    new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, './dist/demo.html'),
        template: './src/demo.html',
        chunks:['demo']
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: false
    }),
    new webpack.BannerPlugin('NutUI v' + config.version + ' ' + new Date().toString()),
    new CopyWebpackPlugin([
        { from: path.join(__dirname, "./src/asset/"), to: path.join(__dirname, "./dist/asset") }
    ])
];

if (isProduction) {
    webpackConfig.devtool = '#cheap-module-source-map';
    webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            },
            'CONFIG':config
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false
        })
    ])
} else {
    webpackConfig.devtool = '#cheap-module-eval-source-map';
    //webpackConfig.output.publicPath = '/';
    webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.DefinePlugin({
            'CONFIG':config
        })
    ]);
    webpackConfig.devServer = {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true, //gzip压缩
        //host:'192.168.191.1',
        historyApiFallback: true
    };
}