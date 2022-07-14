//Start game with keypress
$(document).keydown(function() {
  //Array for button colors
  const buttonColours = ["red", "blue", "green", "yellow"];

  //Array for game Pattern
  const gamePattern = [];

  //Array for userChosenColour clicked
  const userClickedPattern = [];

  //Create Pattern
  function nextSequence() {
    //Generate new random number between 0 and 3 and store it in a variable called randomNumber.
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
  };

  //Select random color from Array
  let randomChosenColour = buttonColours[nextSequence()];

  //Add randomChosenColour to gamePattern Array
  gamePattern.push(randomChosenColour);

  //Use jQuery to select button with same ID as randomChosenColour
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

  //Create sound for button
  var buttonSound = new Audio("sounds/" + randomChosenColour + ".mp3");
  buttonSound.play();

  //Detect which button was clicked
  $("#" + randomChosenColour).click(function() {

    //Create Variable called userChosenColour
    var userChosenColour = $(this).attr("id");

    //Add userChosenColour to userClickedPattern Array
    userClickedPattern.push(userChosenColour);

    // console.log(userClickedPattern);

  });








});
