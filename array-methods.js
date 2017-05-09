console.log("Solar System Exercise");

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(event){
	el.innerHTML += `<p>${event}</p>`;
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var firstLetter = planets.map(function(event){
	//charAt(0) Returns the character at the specified index (position)
	//.toUpperCase Converts to upper case
	//substr(1) Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
	return event.charAt(0).toUpperCase() + event.substr(1);
});
	console.log("Capitalize the first letter", firstLetter);

// Use the filter method to create a new array that contains planets with the letter 'e'
// Filter creates an array that pass a certain test
var newArray = planets.filter(function(event){
	return event.indexOf("e") !== -1;
});
	console.log("New array", newArray);
// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var space = " ";
	console.log(words.reduce(function(x, y){
		return x + space + y;
	}));