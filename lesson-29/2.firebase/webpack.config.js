const HTMLWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const EslintPlugin = require('eslint-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.tsx', // Точка входа
  output: {
    path: __dirname + '/dist', // Папка конечного бандла
    filename: './bundle.js' // Конечный бандл
  },
  devtool: process.env.NODE_ENV !== 'production' && 'eval-source-map', // Генерация sourcemap
  devServer: {
    port: '3000', // Порт
    compress: true, // Сжатие
    open: true, // Открытие при страте
    hot: true, // Горячая перезагрузка◘
    liveReload: true, // Живая перезагрузка
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        format: {
          comments: false
        }
      },
      extractComments: false
    })]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Какие файлы преобразовывать
        use: ['babel-loader', 'ts-loader'], // Лоадеры
        exclude: /node_modules/
      },
      {
        test: /\.less$/, //Для less файлов
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node_modules/
      },
      { // Для изображений
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      { // Для шрифтов
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new EslintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      // fix: true
    }),
    new ImageMinimizerPlugin({ // Плагин минимизации изображений
      minimizerOptions: {
        plugins: [
          ["gifsicle", {interlaced: true}],
          ["jpegtran", {progressive: true}],
          ["optipng", {optimizationLevel: 5}],
        ]
      }
    }),
    new CleanWebpackPlugin()
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development' // Режим сброки (development | production, в нашем случае передаётся при запуске скрипта (--node-env=production))
}
