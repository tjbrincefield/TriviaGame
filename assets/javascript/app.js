$(document).ready(function() {
  loadQuestion();
});

var timer = 60;
var intervalID, correctAnswer= 0 , wrongAnswer = 0;
$("#questions").hide();


$(".button").on("click", startGame);
$("#endGame").on("click", endGame);

// setTimeout(thirtySeconds, 1000 * 30);
// setTimeout(timeUp, 1000 * 60);

function startGame () {
  decrementTimer();
  $("#questions").show();
}

function decrementTimer (){
  intervalID = setInterval(function (){
    timer--;
    if(timer === 0) {
      clearInterval(intervalID);
      endGame();
    }
  }, 1 * 1000)
}

// function thirtySeconds (){
//   $("#time-left").append("<h2>About 30 Seconds Left!</h2>");
// }

function endGame (){
  $("#questions").hide();
  for(var i=0; i< questions.length; i++){
    $.each($("input[name='question-"+ i +"']:checked"), function(){
      if ($(this).val() === questions[i].correctAnswer){
        correctAnswer++;
        $("#correctAnswers").html("Correct Answers: " + correctAnswer);
        // how to get the correct answers to show up on the screen?
      }
      else{
        wrongAnswer++
      }
    })
  }
}

// function timeUp (){
//   $("#time-left").alert("<h2>Time's Up!</h2>");
// }


function loadQuestion() {
  for (var i=0; i < questions.length; i++) {
    $("#questions").append("<h1> " + questions[i].question + " </h1>");
    for(var j = 0; j < questions[i].answer.length; j++){
      $("#questions").append("<input type='radio' class='answer' name='question-" +i+ " ' value=" + questions[i].answer[j] + "> " + questions[i].answer[j]);
    // how do i get a space inbetween the radio buttons and the answers?
    }
  };
  
};


var questions = [{
  question: "What is the average weight for a bottle of wine?",
  answer: ["2.65lbs","1.33lbs","5lbs","3lbs","2.1lbs"],
  correctAnswer: "2.65lbs"
},

{
  question:"Where was the first known winery located?",
  answer:["Babylon", "China", "Armenia", "Greece", "Sicily"],
  correctAnswer:"Armenia"
},

{
  question:"The most popular type of white wine is _________",
  answer:["Reisling", "Chardonnay", "Moscato", "Pinot Grigio", "Sauvignon Blanc"],
  correctAnswer:"Chardonnay"
},

{
  question:"True or False: Fortified wines have been distilled to have a greater alcohol content",
  answer: ["True", "False"],
  correctAnswer: "False; Fortified wines have had brandy or another spirit added to them "
},

{
  question:"What kind of French wine is traditionally made from the pinot noir grape?",
  answer:["Beaujolais", "Bordeaux", "Merlot", "Pinot Noir", "Burgundy"],
  correctAnswer:"Burgundy"
},

{
  question:"What was Dom Perignon’s occupation when he invented Champagne?",
  answer:["Carpenter", "Blacksmith", "Monk", "Shoe Cobbler", "Sculptor"],
  correctAnswer:"Monk"
},

{
  question:"How many standard wine bottles equals one Nebuchadnezzar??",
  answer:["20", "15", "12", "6", "25"],
  correctAnswer:"20"
},

{
  question:"True or False: Red wine is made from red grapes, and white wine is made from white grapes",
  answer:["True", "False"],
  correctAnswer:"False; red wine gets its color because the grape skins are left to ferment with the juice. To make white wine, the skins are removed before fermentation."
},

{
  question:"How many varieties of wine grapes exist in the world today?",
  answer:["5,000", "1,000", "50,000", "10,000"],
  correctAnswer:"There are over 10,000 kinds of grapes"
},

{
  question:"When was the corkscrew designed?",
  answer:["1800's", "1900's", "6000 B.C", "1700's"],
  correctAnswer:"It was designed in the mid-1800s"
}];


