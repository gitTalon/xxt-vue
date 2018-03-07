'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
      
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {

			 test: /\.css$/,

			 loader: 'style-loader!css-loader!postcss-loader' //style-loader!css-loader 解析使用
                                                               // css postcss-loader后端浏览器优化（加前缀）
                                                               //要先加载 postcss-loader写在后面
                                                               //?importLoaders=1 css import 'xxx.css'
      },
      {
				test: /\.scss$/,
			// 	use: ExtractTextPlugin.extract({
      //     use: [{
      //             loader: 'css-loader'
      //         },
      //         {
      //             loader: 'postcss-loader',
      //             options: {
      //                 plugins: [
      //                     require('autoprefixer')({
      //                         browsers: ['last 5 versions']
      //                     })
      //                 ]
      //             }
      //         },
      //         {
      //             loader: 'sass-loader'
      //         }
      //     ]
      // })
			//	loader: "style-loader!css-loader!postcss-loader!sass-loader",//从右往左 先把sass解析成css，再加前缀
			
			},
			{
				test: /\.less$/,
				
				loader: "style-loader!css-loader!postcss-loader!less-loader",//从右往左 先把less解析成css，再加前缀
			
			},
			
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
