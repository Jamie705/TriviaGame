// alert("something");
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

// Creating variables to hold the questions and answers in an object
var questions = [
    {
      question: "The sky is blue.",
      options: { a: true, b: false },
      answer: true
    },
    {
      question: "There are 365 days in a year.",
      options: { a: true, b: false },
      answer: true
    },
    {
      question: "There are 42 ounces in a pound.",
      options: { a: true, b: false },
      answer: false
    },
    {
      question: "The Declaration of Independence was created in 1745.",
      options: { a: true, b: false },
      answer: false
    },
    {
      question: "Bananas are vegetables.",
      options: { a: true, b: false },
      answer: false
    }
  ];

var questionList=0;

//Created variable for wrong, correct and unaswered questions
var wrongAnswer = 0;
var correctAnswer = 0;
var unanswered = 0;

//create var for timer
var timer = 0;
//set interval that runs the stopwatch
var intervalId = 0;

  
function showQuestions(params) {
    for (var i = 0; i < questions.length; i++) {
    questionsList = questions[i]
    console.log("This is: " + questionsList);
    // Then prepend the questions to the top of our question div.
    $("#quest").append("<br><hr>" + questionsList.question + "<br>" +
      //create radio buttons for all the options.
      questionsList.options.a +
      '<label><input type="radio" name=:"' + questionsList.question.length + '" value="' + questionsList.options.a + '" /></label>' + "<br>" +
      questionsList.options.b +
      '<label><input type="radio" name=:"' + questionsList.question.length + '" value="' + questionsList.options.b + '" /></label>' + "<br>" + "Answer = " +
      questionsList.answer);
  }
}


//if statement loop through and check if selected radio = to answer

// check if no answer was provided, push to no answer variable and add to each no answer
// send all answers to array []
// check if answer given === the answer in object. and push ++ the count of right answers up.

// }//create function to start game and include timer
// function start (params) {
    //when start button is clicked;
    $("#startBtn").on("click", function () {
        //start timer
        startTimer ();
        //show questions
        showQuestions();
        //if timer runs down stop timer
        if (timer === 0) {
        stop();
        }
    });


//Game ends when timer runs out or done button is clicked
//Create done/finish button 


//if else statment when game is finished either button or time runs out.

//append answers in the page reveals number of questions that were answered correctly

// Solution if you choose not to put it in an object
 
// prevents the clock from being sped up unnecessarily
var clockRunning = false;

function startTimer () {
    timer = 60;
    $("#timer").text("00:60");
        if (!clockRunning){
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        }    
        //set timer to stopp when it reaches 0
        // else {
        // (timer === 0)
        // stop();
        // }
}


//set timer to stop
function stop() {
  clearInterval(intervalId);
  console.log("stopping");
}

function count() {
  timer--;
  var converted = timeConverter(timer);
  $("#timer").text(converted);
}

//Math function coverts timer 00:00
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}

});
