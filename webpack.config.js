const path = require('path');
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //extrae css

const webpack = require('webpack')
const dotenv = require('dotenv')

const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports = {
  mode: "development",
    entry: { 
        app: './src/index.js',
      //  '../../serverwork': './src/sw.js',     
       '../../service-worker': './src/vendor/sw2.js',   
    },
     output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
          {
          mimetype: 'image/svg+xml',
          scheme: 'data',
          type: 'asset/resource',
          generator: {
            filename: 'icons/[hash].svg'
          }},
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(scss)$/,
                use: [
                  {
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    loader: 'style-loader'
                  },
                  {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                  },
                  {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: () => [
                          autoprefixer
                        ]
                      }
                    }
                  },
                  {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                  }
                ]
              }
        ],
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
    
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css'
        })
         ,
         new HtmlWebpackPlugin({
         	title: 'PRUEBA',
             hash: true,
         	filename: '../index.html',
          template: 'src/index.html'
       //  	template: 'src/template.html'
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
    },
    devServer: {
        static:  path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot:true
      },
}    