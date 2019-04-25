var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  //--------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
	    var userInput = req.body
			var differenceComparison = 100

		// Loops through array of friends
		for (var i = 0; i < friends.length; i++) {
				var totalDifference = 0;
      // Loops for and calculates for each question.
      // The below variable is to calculate overall difference.
			for (var j = 0; j < friends.length; j++) {
				var diff = Math.abs(parseInt(friends[i].scores[j]) - parseInt(userInput.scores[j]));
				totalDifference += diff
			}

			// If lowest difference, record the friend match
			if (totalDifference < differenceComparison) {
				differenceComparison = totalDifference
				var chosenFriendIndex = i;
				}
			
			}
	
		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json(friends[chosenFriendIndex]);
	});
}
