//Array for button colors
var buttonColours = ["red", "blue", "green", "yellow"];

//Array for game Pattern
var gamePattern = [];

//Array for userChosenColour clicked
var userClickedPattern = [];

//Var to check if game has started
var started = false;

//Variable to keep track of level
var level = 0;


//Check when keyboard key has been pressed for first time to start game
$(document).keydown(function() {
  if (!started) {

    //Change h1 from "Press a key to start" to Level
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
})

//Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

  //Create Variable called userChosenColour
  var userChosenColour = $(this).attr("id");

  //Add userChosenColour to userClickedPattern Array
  userClickedPattern.push(userChosenColour);

  //Play sound of button clicked
  playSound(userChosenColour);

  //Animate button clicked
  animatePress(userChosenColour);

  //Check answer
  checkAnswer(userClickedPattern.length-1);

});

//Function to check if users click is correct answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");
    //Check that click is right, then check they have finished the nextSequence
    if(userClickedPattern.length === gamePattern.length){
      //Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    //Play wrong sound
    playSound("wrong");

    //Show game-over message
    $("body").addClass("game-over");
    //Remove the pressed class after a 200 milliseconds.
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    //Change h1 to say "Game Over, Press Any Key to Restart"
    $("h1").text("Game Over, Press Any Key to Restart");

    //Restart game
    startOver();

    // console.log("wrong");
  }

}


//Create Pattern
function nextSequence() {

  //Reset userClickedPattern
  userClickedPattern = [];
  //Increase level by 1
  level++;
  $("#level-title").text("Level " + level);

  //Generate new random number between 0 and 3 and store it in a variable called randomNumber.
  var randomNumber = Math.floor(Math.random() * 4);
  // return randomNumber;

  //Select random color from Array
  var randomChosenColour = buttonColours[randomNumber];

  //Add randomChosenColour to gamePattern Array
  gamePattern.push(randomChosenColour);

  //Use jQuery to select button with same ID as randomChosenColour
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
  playSound(randomChosenColour);


}

//Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {

  //Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

  //Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //Remove the pressed class after a 100 milliseconds.
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//Restart game after game Over
function startOver() {
  //Change started state to false to be able to restart gamePattern
  started = false;

  //Change level back to 0
  level = 0;

  //reset gamePattern
  gamePattern = [];

}
