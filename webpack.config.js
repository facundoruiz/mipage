const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //extrae css

module.exports = {
    entry: { 
        app: './src/index.js',
        '../../../serverwork': './src/sw.js',     
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
         	filename: 'index.html',
         	template: 'src/template.html'
         }),
    ],
    resolve:{
        extensions:['.js']
    }
}    