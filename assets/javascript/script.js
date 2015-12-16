$(document).ready(function() {

// an example of an object literal
var colors = {

	color: 'blue',
	sayColor: function() {
		console.log("it's blue");
	}
};

// an example of an object created with a constructor function

function Food(name, description) {
	this.name = name;
	this.description = description;
	this.isActive = true;
}

Food.prototype.describeFood = function() {
	console.log(this.name + " is " + this.description + ".");
};

var food1 = new Food('Pizza', 'cheesy');
food1.describeFood();

var food2 = new Food('Cake', 'sweet');
food2.describeFood();

var food3 = new Food('Pad Thai', 'delicious');
food3.describeFood();

});
