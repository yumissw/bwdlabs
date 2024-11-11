const path = require('path'); // Импортируем модуль "path" для работы с путями файлов

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

   entry: './src/index.js', // Точка входа для сборки проекта


   output: {

       filename: 'bundle.js', // Имя выходного файла сборки

       path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки

   },


   module: {

       rules: [

           {
               test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
               use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
           },





 {
    test: /\.(png|jpg|gif|svg)$/,
    use: [
     {
      loader: 'file-loader',
 options: {
              name: '[name].[ext]',
              outputPath: 'smth/',
},
     },
    ],
   },

   
     
 


],
},

   plugins: [

new CopyPlugin({
      patterns: [
        { from: 'src/smth/ic.png', to: 'dist' }, // Скопируйте файл в папку dist
 { from: 'src/smth/check.svg', to: 'dist' }, // Скопируйте файл в папку dist
      ],
    }),

       new HtmlWebpackPlugin({

           template: './src/1.html',

           inject: true,

           chunks: ['index'],

           filename: '1.html'

       }),
new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: true,
          chunks: ['index'],
          filename: 'index.html'
        }),
new HtmlWebpackPlugin({
          template: './src/about.html',
          inject: true,
          chunks: ['index'],
          filename: 'about.html'
        }),
new HtmlWebpackPlugin({
          template: './src/main.html',
          inject: true,
          chunks: ['index'],
          filename: 'main.html'
        }),
new HtmlWebpackPlugin({
          template: './src/projects.html',
          inject: true,
          chunks: ['index'],
          filename: 'projects.html'
        }),
   ],


   devServer: {

       static: {

           directory: path.join(__dirname, 'dist'), // Каталог для статики

       },

       open: true, // Автоматически открывать браузер

   },


   mode: 'development', // Режим сборки

};