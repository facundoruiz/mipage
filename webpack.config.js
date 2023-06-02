const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //extrae css

module.exports = {
    entry: { 
        app: './src/index.js',
        '../../serverwork': './src/sw.js',     
    },
     output: {
        path: path.resolve(__dirname, 'dist/assets'),
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
         	title: 'PRUEBA',
             hash: true,
         	filename: '../index.html',
         	template: 'src/template.html'
         }),
         new HtmlWebpackPlugin({
            title: 'INGRESO',
            filename: '../login.html',
            template: 'src/template.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Registrar',
            filename: '../registrar.html',
            template: 'src/registro.html'
        }),
         new HtmlWebpackPlugin({
            title: 'Fuera de Servicio',
            filename: '../offline.html',
            template: 'src/offline.html'
        }),
    ],
    resolve:{
        extensions:['.js']
    }
}    