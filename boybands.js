// The number of loops to perform (what if the array changes?)
// Keep track of which band we're on in the loop
// Keep track of which veggie we're on in the loop
// Get a reference to the appropriate DOM element for bands
// Get a reference to the appropriate DOM element for vegetables
// Start looping
// Add the band names into the correct <div>
// Add the veggie names into the correct <div>


var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var loopCount = 5;
var currentBand = "";
var currentVeggie = "";
var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
    currentBand += "<li>" + bands[loopTracker] + "</li>";
    currentVeggie += "<li>" + vegetables[loopTracker] + "</li>";
}

bandElement.innerHTML = currentBand;
veggieElement.innerHTML = currentVeggie;
