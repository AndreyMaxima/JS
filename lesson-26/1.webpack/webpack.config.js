const HTMLWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.tsx', // Точка входа
  output: {
    path: __dirname + '/dist', // Папка конечного бандла
    filename:'./bundle.js' // Конечный бандл
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
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ],
  // mode: 'development' // Режим сброки (development | production, в нашем случае передаётся при запуске скрипта (--node-env=production))
}
