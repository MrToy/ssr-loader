module.exports = function() {}
module.exports.pitch=function(remainingRequest){
	if(this.target=="node"){
		return `module.exports = require("${"-!"+remainingRequest}").default`
	}else{	
		return `
var wait = require("ssr-loader/waiter")
module.exports=wait.default(function(){return import("${"-!"+remainingRequest}")})
`
	}
}
