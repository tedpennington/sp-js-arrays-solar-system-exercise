 console.log("array-methods.js loaded");


// Array Provided:

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* INSTRUCTIONS
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planets.forEach(function(element, index, array){
    let planetNumber = index + 1;
    document.getElementById("planets").innerHTML += `<p>Planet number ${planetNumber}: ${element}</p><br>`;

});




// INSTRUCTIONS:

// Use the map method to create a new array where the first letter of each planet is capitalized

var capsPlanets = planets.map(function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);

});
console.log("capsPlanets", capsPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'

var ePlanets = planets.filter(function(string){
    return string.includes("e");
})
console.log("ePlanets", ePlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(prev, curr){
    return prev + " " + curr;
});
console.log("sentence", sentence);

// EXERCISE COMPLETE






