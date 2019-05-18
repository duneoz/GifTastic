// Initial array of characters
var characters = ["Bert", "Ernie", "Cookie Monster", "Big Bird"];

// Generic function for capturing the character name from the data-attribute
function alertMovieName() {

  // YOUR CODE GOES HERE!!!

}

// Function for displaying character data
function renderButtons() {

  // Deleting the character prior to adding new movies
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of characters
  for (var i = 0; i < characters.length; i++) {

    // Then dynamicaly generating buttons for each character in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class
    a.addClass("character");
    // Added a data-attribute
    a.attr("data-name", characters[i]);
    // Provided the initial button text
    a.text(characters[i]);
    // Added the button to the HTML
    $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-character").on("click", function(event) {
  
  // This line grabs the input from the textbox
  var character = $("#character-input").val().trim();
  
  event.preventDefault();

  // check if character is truthy (has a value), push a button if so, else nothing
  if (character) {
    // The movie from the textbox is then added to our array
  characters.push(character);
  $("#character-input").val("");
  }
  
  // Calling renderButtons which handles the processing of our character array
  renderButtons();
});



// Function for displaying the movie info
  
// We're adding a click event listener to all elements with the class "movie"
// We're adding the event listener to the document itself because it will
// work for dynamically generated elements
// $(".movies").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".movie", alertMovieName);

// Calling the renderButtons function to display the intial buttons
renderButtons();


//button click run AJAX get
$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=b6mnH3SZPhauWLEoC7W1irZoPRn1TsOl&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    });

});