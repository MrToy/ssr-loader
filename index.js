module.exports = function() {}
module.exports.pitch=function(remainingRequest){
	if(this.target=="node"){
		return "module.exports = require(" + JSON.stringify("-!" + remainingRequest) + ");"
	}else{	
		return `
var wait = require("ssr-loader/waiter")
module.exports=wait.default(()=>import(${JSON.stringify("-!" + remainingRequest)}))
`
	}
}