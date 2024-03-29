const webpack = require('webpack');

module.exports = {
	entry:'./src/index.js',
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				exclude:/node_modules/,
				use:['babel-loader']
			},
			{ 
	          test: /\.css?$/,
	          use: [
	            { loader: "style-loader" },
	            { loader: "css-loader" },
	          ]
	        },
	        {
	          test: /\.scss$/,
	          use: [
	            { loader: "style-loader" },
	            { loader: "css-loader" },
	            { loader: "sass-loader" }
	          ]
	        },
	        {
	        	test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      			loader: 'url-loader?limit=100000' 
      		}
		]
	},
	resolve:{
		extensions:['*','.js','.jsx']
	},
	output:{
		path:__dirname + '/dist',
		publicPath:'/',
		filename:'bundle.js'
	},
	 plugins: [
    	new webpack.HotModuleReplacementPlugin()
  	],
	devServer:{
		contentBase:'./dist',
		hot:true
	}
};