import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

const { NODE_ENV } = process.env;
const mode = (NODE_ENV || 'development') as Configuration['mode'];

const config = {
  context: __dirname,
  mode,
  plugins: [new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(__dirname, 'index.html')
  })],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [],
  },
  stats: {
    colors: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'index.html'),
    hot: true,
    publicPath: '/'
  },
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'index.js'
  }
};

export default config;
