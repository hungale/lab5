var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
  res.render('add');
  var name = req.query.name;
  var desc = req.query.description;
  console.log(name);
  console.log(desc);
  /*
  var newFriend =
  '{test:[' +
      '"name": "Doug Engelbart",'+
      '"description": "Has awesome pet mice",'+
      'imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"'+
  ']}';
  */
  //var jsonFriend = JSON.parse(newFriend);
  //console.log(jsonFriend);
  //console.log(test);
  //data["friends"].push(test);
}