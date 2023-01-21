const path = require('path');
const url =require('url');
const NodemonPlugin = require('nodemon-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production' ? 'development' : 'production';

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  mode: devMode,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'server.cjs',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    assetModuleFilename: 'assets/logo/[hash][ext][query]',
  },
  plugins: [
    new NodemonPlugin(),
    new (require("webpack")).ExternalsPlugin("commonjs", [
			"@nut-tree/nut-js"
		])
  ],
  watchOptions: {
    ignored: './dist',
  },
};
