// alert("something");
// $(document).ready(function () {
// document.addEventListener("DOMContentLoaded", function (event) {
//   console.log("DOM fully loaded and parsed");

// Creating variables to hold the questions and answers in an object
var questions = [
    {
      question: "The NFL football feild is 160 feet wide",
      options: { a: true, b: false },
      answer: true
    },
    {
      question: "The longest field goal made in the NFL is 64 yards.",
      options: { a: true, b: false },
      answer: true
    },
    {
      question: "The New Englad Patriots have 8 superbowl rings.",
      options: { a: true, b: false },
      answer: false
    },
    {
      question: "The NFL football used is made of 'pig-skin'.",
      options: { a: true, b: false },
      answer: false
    },
    {
      question: "The San Fransisco 49ers scored the most points in a superbowl.",
      options: { a: true, b: false },
      answer: true
    }
  ];

var questionList=0;

//Created variable for wrong, correct and unaswered questions
var wrongAnswers = 0;
var correctAnswers = 0;

var arrAnswers = questions[0].answer;
//create var for timer
var timer = 0;
//set interval that runs the stopwatch
var intervalId = 0;
var radioAnswers = []
  
function showQuestions(params) {
  
    //for loop to issue questions & radio buttons   
    for (var i = 0; i < questions.length; i++) {
    questionsList = questions[i];
    console.log("This is the question list: " + questionsList.question);
    
    // Then prepend the questions to the top of our question div.
    $("#quest").prepend("<br><hr>" + questionsList.question + "<br>" +
        
    //create radio buttons for all the options.
      // questionsList.options.a +
      '<form><label>True<input type="radio" name=:"' + questionsList.question + '" value="' + questionsList.options.a + '" /></label>' + "<br>" +
      // questionsList.options.b +
      '<label>False<input type="radio" name=:"' + questionsList.question + '" value="' + questionsList.options.b + '" /></label></form>' + "<br>"
      //login answers
      // "Answer = " + questionsList.answer
      );
    }
   
         //submit button to generate answers and add them to array or compare to correct answers
        $("#quest").append('<button id=:"submitBtn">Submit</button>'); 
        
        $("button").click(function () {
            $("input[name='questionsList.question']:checked")        
            radioAnswers.push($("input").val());
            console.log(radioAnswers.length + radioAnswers);
          // check if answer given === the answer in object. and push ++ the count of right answers up.
            //will use function elsify
            //append answers in the page reveals number of questions that were answered correctly
            $("#score").css("display", "block");
        });
} 

//total array answers minus- correctAnswers = Wrong answer
wrongAnswers = arrAnswers.length - correctAnswers.length;

//function to insert else if statments
  function elsify (params) {
    //length of answers for both guessed correclty and answer array means all answers were correct
    if (radioAnswer.length === arrAnswers.length) {
      console.log("You got them all right")
      //should equal same amount of questions right
      correctAnswers = question.length;
      //update score
      $('#correctAnswer').text("Correct Answers: " + correctAnswers);
      } 
      //compare how many radio answers were correct and update
    else if (radioAnswer.length != arrAnswers.length){
      //show correct answers
      console.log("Answered Correctly: " + correctAnswers.length)
      console.log("Inorrectly Answered: " + wrongAnswers)
      $('#correctAnswer').text("Correct Answers: " + correctAnswers.length);
      $('#wrongAnswer').text("Wrong Answers: " + wrongAnswers);
    }
  };            

// check if no answer was provided, push to no answer variable and add to each no answer

// }//create function to start game and include timer
// function start (params) {
    //when start button is clicked;
    $("#startBtn").on("click", function () {
        //start timer
        startTimer ();
        //show questions
        showQuestions();
    });


//Game ends when timer runs out or done button is clicked
//Create done/finish button 


//if else statment when game is finished either button or time runs out.

//append answers in the page reveals number of questions that were answered correctly

 
// prevents the clock from being sped up unnecessarily
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
  }
}

// });
