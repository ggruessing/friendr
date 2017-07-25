var data = require("../data/friends.json")
var fs = require("fs")

var alfredTheApiAmbassador = function(app){

	app.get("/api/friends", function(req,res){
		res.json(data)
	})

	app.post("/api/friends", function(req,res){
		
		
		var best = 50
		var bestData
		
		console.log(data)

		

		var friendilator = function(numbahs){
			for (var i = 0; i < numbahs.length; i++) {
				var match = 0
				for (var j = 0; j < numbahs[i].scores.length; j++) {
					
					match += Math.abs(parseInt(numbahs[i].scores[j]) - parseInt(req.body.scores[j]))
				}
				if(match<best){
					console.log("matched")
					bestData = numbahs[i]
					best = match
					match = 0
				}
				else{
					console.log("no match")
					match = 0
				}
				
				
			}
			console.log(bestData)
		}
		friendilator(data)
		res.json(bestData)
		data.push(req.body)
		fs.writeFile("app/data/friends.json" , JSON.stringify(data), function(err){
			if(err) throw err
		})
	})
}



module.exports = alfredTheApiAmbassador