// alert("something");

// Creating variables to hold the questions and answers in an object
var questions = {question1: false, question2: true};

//Created variable for wrong, correct and unaswered questions
var wrongAnswer = 0;
var correctAnswer = 0;
var unanswered = 0;

//create var for timer
var timer = 0;
//set interval that runs the stopwatch
var intervalId;

// function countdown (params) {
//     oneminute = 0;
//     onesecond = 0;
//     timer = setTimeout(oneminute, 1000 * 60) ;  
//     //set the "timer" div to "00:60."
//     $("#timer").text("00:60");
//     //set interval that runs the stopwatch
//     intervalId = setInterval(onesecond, 1000);
// }
//create function to start game and include timer
// function start (params) {
    //when start button is clicked;
    $("#startBtn").on("click", function () {
        //start timer
        start();
        //show questions
    
    });


//Game ends when timer runs out or done button is clicked
//Create done/finish button 


//if else statment when game is finished either button or time runs out.

//append answers in the page reveals number of questions that were answered correctly

//Dont let player pick more than one answer
//Create radio to only choose one option.
//
// Solution if you choose not to put it in an object



  
// prevents the clock from being sped up unnecessarily
var clockRunning = false;

function start() {
    timer = 60;
    $("#timer").text("00:60");
        if (!clockRunning){
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        }
}

    //set timer to stopp when it reaches 0
        // if (timeConverter(timer) == "00"){
        //     stop();
        // }


function stop() {
    console.log("stopping");
    clearInterval(intervalId);
}

function count() {
  timer--;
  var converted = timeConverter(timer);
  $("#timer").text(converted);
}

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


//     //function to run else if statments if equal, or over
//     function elsify (params) {
//             if (gemTotal === randomNumber) {
//                 console.log("You Win");
//                 wins++;
//                 reset()
//             }
//             else if (gemTotal > randomNumber){
//                 console.log("You went over the random number. You Lost.");
//                 losses++;
//                 reset()
//             }
//    
