window.onload = function() {
  };
  // $(document).ready(function() - did i need this instead of the window onload function?
  $(".button").on("click", loadQuestion);

  function loadQuestion() {
    for (i=0; i< questions.length; i++) {
      $("#question").text(this.question);
      $("#answer").text(this.answer[i]);
      // i want to load the questions when the button is clicked - and then only load the answer after the time is up
    };
    // tenSeconds() 
    //   $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
    //   console.log("5 seconds left");
    
  };

  // // setTimeout(fiveSeconds, 1000 * 5);
  // setTimeout(tenSeconds, 1000 * 10);
  // setTimeout(timeUp, 1000 * 15);

  // On click i want to load the questions that i will set below

var questions = [{
  question: "What is the average weight for a bottle of wine?",
  answer: ["2.65lbs","1.33lbs","5lbs","3lbs","2.1lbs"],
  correctAnswer: "2.65lbs"
  // you can add an image here if you want
},

{
  question:"Where was the first known winery located?",
  answer:["Babylon", "China", "Armenia", "Greece", "Sicily"],
  correctAnswer:"Armenia"
    // you can add an image here if you want
},

{
  question:"The most popular type of white wine is _________",
  answer:["Reisling", "Chardonnay", "Moscato", "Pinot Grigio", "Sauvignon Blanc"],
  correctAnswer:"Chardonnay"
  // you can add an image here if you want
},

{
  question:"True or False: Fortified wines have been distilled to have a greater alcohol content",
  answer: ["True", "False"],
  correctAnswer: "False; Fortified wines have had brandy or another spirit added to them "
    // you can add an image here if you want
},

{
  question:"What kind of French wine is traditionally made from the pinot noir grape?",
  answer:["Beaujolais", "Bordeaux", "Merlot", "Pinot Noir", "Burgundy"],
  correctAnswer:"Burgundy"
  // you can add an image here if you want
},

{
  question:"What was Dom Perignon’s occupation when he invented Champagne?",
  answer:["Carpenter", "Blacksmith", "Monk", "Shoe Cobbler", "Sculptor"],
  correctAnswer:"Monk"
  // you can add an image here if you want
},

{
  question:"How many standard wine bottles equals one Nebuchadnezzar??",
  answer:["20", "15", "12", "6", "25"],
  correctAnswer:"20"
  // you can add an image here if you want
},

{
  question:"True or False: Red wine is made from red grapes, and white wine is made from white grapes",
  answer:["True", "False"],
  correctAnswer:"False; red wine gets its color because the grape skins are left to ferment with the juice. To make white wine, the skins are removed before fermentation."
  // you can add an image here if you want
},

{
  question:"How many varieties of wine grapes exist in the world today?",
  answer:["5,000", "1,000", "50,000", "10,000"],
  correctAnswer:"There are over 10,000 kinds of grapes"
  // you can add an image here if you want
},

{
  question:"When was the corkscrew designed?",
  answer:["1800's", "1900's", "6000 B.C", "1700's"],
  correctAnswer:"It was designed in the mid-1800s"
  // you can add an image here if you want
}];

// function timeUp() {
//   console.log("done");
//   $("#time-left").append("<h2>Time's Up!</h2>");
//   console.log("time is up");
// };

