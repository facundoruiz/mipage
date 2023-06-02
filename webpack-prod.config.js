const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //extrae css

module.exports = {
    mode: "production",
    entry: { 
        app: './src/index.js',
        '../../serverwork': './src/sw.js',  
    },
     output: {
        path: path.resolve(__dirname, 'docs/assets'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css'
        })
         ,
         new HtmlWebpackPlugin({
         	title: 'INICIO',
         	filename: '../index.html',
         	template: 'src/template.html'
         }),
         new HtmlWebpackPlugin({
            title: 'Fuera de Servicio',
            filename: '../offline.html',
            template: 'src/offline.html'
        }),
    ],
    resolve:{
        extensions:['.js']
    },
    optimization: {
        minimize: true,
        
      },
}    