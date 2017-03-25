module.exports = function() {}
module.exports.pitch=function(remainingRequest){
	if(this.target=="node"){
		return `module.exports = require("${"-!"+remainingRequest}");`
	}else{	
		return `
var wait = require("ssr-loader/waiter")
module.exports=wait.default(()=>import("${"-!"+remainingRequest}"))
`
	}
}