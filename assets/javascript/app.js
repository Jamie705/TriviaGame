// alert("something");
$(document).ready(function () {

// Creating variables to hold the questions and answers in an object
var footballList = [
    {
      question: "The NFL football feild is 160 feet wide",
      options: { a: true, b: false },
      answer: "true"
    },
    {
      question: "The longest field goal made in the NFL is 64 yards.",
      options: { a: true, b: false },
      answer: "true"
    },
    {
      question: "The New Englad Patriots have 8 superbowl rings.",
      options: { a: true, b: false },
      answer: "false"
    },
    {
      question: "The NFL football used is made of 'pig-skin'.",
      options: { a: true, b: false },
      answer: "false"
    },
    {
      question: "The San Fransisco 49ers scored the most points in a superbowl.",
      options: { a: true, b: false },
      answer: "true"
    }
  ];

  //answers in array
var arrAnswers =[];
  //created for loop to put answers in array
for (let j = 0; j < footballList.length; j++) {
  arrAnswers.push(footballList[j].answer);
  // console.log(arrAnswers);
}

//Created variable for wrong, correct and unaswered questions
var wrongAnswers = 0;
var correctAnswers = 0;

//create var for timer
var timer = 0;
//set interval that runs the stopwatch
var intervalId = 0;
var radioAnswers = [];

  // function start (params) {
    //when start button is clicked;
    $("#startBtn").on("click", function () {
      //start timer
      startTimer ();
      //show questions
      startDisplay();
    });

    //funtion to show/hide start menu
function startDisplay(params) {
  $("#quest").css("display", "initial");
  $("#instructions").css("display", "none");
  $("#startBtn").css("display", "none");
  $("#restartBtn").css("display", "none");
}

function finishDisplay(params) {
  $("#score").css("display", "block");
  $("#quest").css("display", "none");
  // initialize restart
  $("#restartBtn").css("display", "initial");
  restart();
}
//function to update score
function update (params) {
  $("#correct").text(correctAnswers);
  $("#wrong").text(wrongAnswers);
}

//restart game/ change or create new button to restart
function restart(params) {
//restart with new button, on click resets all
  $("#restartBtn").on("click", function () {
    //start timer
    startTimer();
    //show questions
    startDisplay();
    //zero variables and score
    wrongAnswers = 0;
    correctAnswers = 0;
    radioAnswers = [];
    update()

  });
}
//function to check the answers/
//*****************Get Answers***************************** */

function checkAnswers (params) {
         //for loop to issue questions & radio buttons did not work
      $('input[name= "q1"]:checked');
      radioAnswers.push($('input[name= "q1"]:checked').val());
      console.log("q1: " + radioAnswers);
      //if else
      if (radioAnswers[0] === arrAnswers[0]) {
        correctAnswers++;
      }
      else {
        (radioAnswers[0] != arrAnswers[0]);
        wrongAnswers++;
      }
      update();
       //question 2
      $('input[name= "q2"]:checked').val();
      radioAnswers.push($('input[name= "q2"]:checked').val());
      console.log("q2: " + radioAnswers);
      
      if (radioAnswers[1] === arrAnswers[1]) {
        correctAnswers++;
      }
      else {
        (radioAnswers[1] != arrAnswers[1]);
        wrongAnswers++;
      }
      update();
      //question 3
      $('input[name= "q3"]:checked').val();
      radioAnswers.push($('input[name= "q3"]:checked').val());
      console.log("q3: " + radioAnswers);
      if (radioAnswers[2] === arrAnswers[2]) {
        correctAnswers++;
      }
      else {
        (radioAnswers[2] != arrAnswers[2]);
        wrongAnswers++;
      }
      update();

      //question 4
      $('input[name= "q4"]:checked').val();
      radioAnswers.push($('input[name= "q4"]:checked').val());
      console.log("q4" + radioAnswers);
      
      if (radioAnswers[3] === arrAnswers[3]) {
        correctAnswers++;
      }
      else {
        (radioAnswers[3] != arrAnswers[3]);
        wrongAnswers++;
      }
      update();
      //question 5
      $('input[name= "q5"]:checked').val();
      radioAnswers.push($('input[name= "q5"]:checked').val());
      console.log("q5" + radioAnswers);
    
      if (radioAnswers[4] === arrAnswers[4]) {
        correctAnswers++;
      }
      else {
        (radioAnswers[4] != arrAnswers[4]);
        wrongAnswers++;
      }
      update();
      //turn off timer
        clearInterval(intervalId);
        console.log("Timer Off");
        clockRunning = false;
        $("#timer").text("00");

}  
    //create click event, on button, only displays 1 answer on all it displays
    $("#results").click(function () {
      //show scoreboard
      finishDisplay();
      checkAnswers();

    });
// prevents the clock from being sped up unnecessarily
//***************TIMER***************
var clockRunning = false;

function startTimer () {
    timer = 60;
    $("#timer").text("60");
        if (!clockRunning){
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        }    
}

function count() {
  timer--;
  $("#timer").text(timer);
  //set timer to stopp when it reaches 0  
  if (timer === 0) {
    clearInterval(intervalId);
    console.log("Time is up");
    clockRunning = false;
    $("#score").css("display", "block");
    //if clock runs out check answers given and set final display
    checkAnswers();
    finishDisplay();

  }
}

});
