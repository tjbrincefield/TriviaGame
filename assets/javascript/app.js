window.onload = function() {
    $(".button").on("click", loadQuestion);
  };

  function loadQuestion() {
    questions[i];
    console.log("loadQuestion");
  }


  // On click i want to load the questions that i will set below

var questions = [{
  question:"What is the average weight for a bottle of wine?"
  answer:["2.65lbs","1.33lbs","5lbs","3lbs","2.1lbs"]
  correctAnswer:"2.65lbs"
  // you can add an image here if you want
},

{
  question:"Where was the first wine made?"
  answer:["Babylon", "China", "Armenia", "Greece", "Sicily"]
  correctAnswer:"Armenia"
    // you can add an image here if you want

},

{
  question:"The most popular type of white wine is _________"
  answer:["Reisling", "Chardonnay", "Moscato", "Pinot Grigio", "Sauvignon Blanc"]
  correctAnswer:"Chardonnay"
  // you can add an image here if you want

},

{
  question:""
  answer: 
  correctAnswer: 
    // you can add an image here if you want

}];














// Step 1:
// Use the following Audio file below:
// var audio = new Audio("raven.mp3");

//  Step 2:
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

//  Step 3:
//  Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}

function tenSeconds() {
  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  console.log("5 seconds left");
}

function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");

  //  The following line will play the audio file we linked to above:
  audio.play();
}
