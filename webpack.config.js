const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: mode === 'production' ? './styles/[name].[contenthash].css' : './styles/[name].css',
  }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
];

if (process.env.SERVE) {
  plugins.push(
      new ReactRefreshWebpackPlugin()
  );
}

module.exports = {
  mode,
  target,
  plugins,
  devtool: 'source-map',
  entry: './src/index.js',
  resolve: {
    alias: {
      "@root"      : path.resolve(__dirname),
      "@public"      : path.resolve(__dirname, "public/"),
      "@images"      : path.resolve(__dirname, "public/images"),
      "@icons"      : path.resolve(__dirname, "public/icons"),
      "@src"      : path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@styles"      : path.resolve(__dirname, "src/styles")
    } || {},
    extensions: ['.js', '.jsx', '.css', '.scss', '.jpeg', '.png', '.svg']
  },
  devServer: {
    port: 20102,
    hot: true,
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][hash][ext][query]',
    clean: true,
  },

  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        generator: {
          filename: "./styles/[name][ext]",
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
        generator: {
          filename: "./images/[name][ext]",
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "./fonts/[name][ext]",
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }
      }
    ],
  },
};
