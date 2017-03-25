var path=require('path')
module.exports={
	output:{
		filename:"[name].js",
		libraryTarget:"commonjs"
	},
	entry:{
		index:"./src/index.js",
		waiter:"./src/waiter.js"
	},
	externals:/^[^.]/,
	module: {
		rules:[
			{ 
				test: /\.js$/, 
				exclude:/node_modules/,
				use:[{
					loader: "babel-loader",
					options:{
						babelrc: false,
						"presets": ["env","stage-0","react"],
						"plugins": ["transform-runtime"]
					}
				}]
			}
		]
	}
}