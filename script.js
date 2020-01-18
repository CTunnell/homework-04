var title = document.querySelector(".title");
var lower1 = document.querySelector(".lower1");
var lower2 = document.querySelector(".lower2");
var lower3 = document.querySelector(".lower3");
var lower4 = document.querySelector(".lower4");
var startButton = document.createElement("button");

startButton.textContent = "Begin Quiz";

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ];

  displayInitial();

  function displayInitial() {
      title.textContent = "Welcome to the Quiz!"
      lower1.textContent = "Click the button to get started."
      lower2.appendChild(startButton);

      startButton.addEventListener("click", displayQuiz);
  }


  function displayQuiz() {
         title.textContent = questions[0].title;
         lower1.textContent = questions[0].choices[0];
         lower2.textContent = questions[0].choices[1];
         lower3.textContent = questions[0].choices[2];
         lower4.textContent = questions[0].choices[3];    
  }
//title.textContent = questions[0].title;
//lower.textContent = questions[0].choices;