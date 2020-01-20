var timer = document.querySelector("#timer")
var scoreDisplay = document.querySelector("#score-display");
scoreDisplay.addEventListener("click", displayScores);
var secondsLeft = 75; 
var count = localStorage.getItem("count");
var title = document.querySelector(".title");
var lower1 = document.querySelector(".lower1");
var lower2 = document.querySelector(".lower2");
var lower3 = document.querySelector(".lower3");
var lower4 = document.querySelector(".lower4");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

var scores = [];
var storedScores = JSON.parse(localStorage.getItem("scores"));

function init() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));

  if (storedScores !== null) {
    scores = storedScores;
  };
};

function storeScores() {
  event.preventDefault();
  localStorage.setItem("scores", JSON.stringify(scores));
};

init();


button1.style.minHeight = "20px";
button2.style.minHeight = "20px";
button3.style.minHeight = "20px";
button4.style.minHeight = "20px";

var startButton = document.createElement("button");
startButton.textContent = "Begin Quiz";

var a = document.createElement('a');
a.setAttribute('href', "https://ctunnell.github.io/homework-04/");
a.innerHTML = "Take the quiz again";

var questions = [
  {
    title: "Before the success of Nine Inch Nails, Trent Reznor was a:",
    choices: ["bartender", "janitor", "barista", "cashier"],
    answer: "janitor"
  },
  {
    title: "Nine Inch Nails' first full-length album, Pretty Hate Machine, came out in:",
    choices: ["1987", "1989", "1991", "1993"],
    answer: "1989"
  },
  {
    title: "Nine Inch Nails has been active since:",
    choices: ["1984", "1986", "1988", "1990"],
    answer: "1988"
  },
  {
    title: "The only Nine Inch Nails release without a Halo number, Nine Inch Nails' release numbering method, is:",
    choices: ["The Perfect Drug", "Ghosts I-IV", "Deep", "Every Day Is Exactly The Same"],
    answer: "Deep"
  },
  {
    title: "The Halo number for Year Zero, NIN's fifth studio album, is:",
    choices: ["21", "22", "23", "24"],
    answer: "24"
  },
];



displayInitial();

count = 0;


function displayInitial() {
  title.textContent = "Welcome to the Quiz!"
  lower1.textContent = "Click the button to get started."
  lower2.textContent = "This quiz has five questions. You will have fifteen seconds to answer each one."
  lower3.appendChild(startButton);
  lower4.textContent = " ";

  startButton.addEventListener("click", displayQuiz);
  startButton.addEventListener("click", setTime);
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Seconds left: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timeOut();
    }

  }, 1000);
};

function incrementCount() {
  count++;
};

function displayQuiz() {

  title.textContent = questions[0].title;
  lower1.textContent = questions[0].choices[0] + " ";
  lower1.appendChild(button1)
  lower2.textContent = questions[0].choices[1] + " ";
  lower2.appendChild(button2);//
  lower3.textContent = questions[0].choices[2] + " ";
  lower3.appendChild(button3);
  lower4.textContent = questions[0].choices[3] + " ";
  lower4.appendChild(button4);

  button1.addEventListener("click", displayQuizTwo);
  button2.addEventListener("click", displayQuizTwo);
  button2.addEventListener("click", function () {
    event.preventDefault();
    incrementCount();
  });
  button3.addEventListener("click", displayQuizTwo);
  button4.addEventListener("click", displayQuizTwo);

};

function displayQuizTwo() {

  title.textContent = questions[1].title;
  lower1.textContent = questions[1].choices[0] + " ";
  lower1.appendChild(button1)
  lower2.textContent = questions[1].choices[1] + " ";
  lower2.appendChild(button2); //
  lower3.textContent = questions[1].choices[2] + " ";
  lower3.appendChild(button3);
  lower4.textContent = questions[1].choices[3] + " ";
  lower4.appendChild(button4);

  button1.addEventListener("click", displayQuizThree);
  button2.addEventListener("click", displayQuizThree);
  button2.addEventListener("click", function () {
    event.preventDefault();
    incrementCount();
  });
  button3.addEventListener("click", displayQuizThree);
  button4.addEventListener("click", displayQuizThree);

};

function displayQuizThree() {

  title.textContent = questions[2].title;
  lower1.textContent = questions[2].choices[0] + " ";
  lower1.appendChild(button1)
  lower2.textContent = questions[2].choices[1] + " ";
  lower2.appendChild(button2);
  lower3.textContent = questions[2].choices[2] + " ";
  lower3.appendChild(button3);//
  lower4.textContent = questions[2].choices[3] + " ";
  lower4.appendChild(button4);

  button1.addEventListener("click", displayQuizFour);
  button2.addEventListener("click", displayQuizFour);
  button3.addEventListener("click", displayQuizFour);
  button3.addEventListener("click", function () {
    event.preventDefault();
    incrementCount();
  });
  button4.addEventListener("click", displayQuizFour);

};

function displayQuizFour() {

  title.textContent = questions[3].title;
  lower1.textContent = questions[3].choices[0] + " ";
  lower1.appendChild(button1)
  lower2.textContent = questions[3].choices[1] + " ";
  lower2.appendChild(button2);
  lower3.textContent = questions[3].choices[2] + " ";
  lower3.appendChild(button3);//
  lower4.textContent = questions[3].choices[3] + " ";
  lower4.appendChild(button4);

  button1.addEventListener("click", displayQuizFive);
  button2.addEventListener("click", displayQuizFive);
  button3.addEventListener("click", displayQuizFive);
  button3.addEventListener("click", function () {
    event.preventDefault();
    incrementCount();
  });
  button4.addEventListener("click", displayQuizFive);

};

function displayQuizFive() {

  title.textContent = questions[4].title;
  lower1.textContent = questions[4].choices[0] + " ";
  lower1.appendChild(button1)
  lower2.textContent = questions[4].choices[1] + " ";
  lower2.appendChild(button2);
  lower3.textContent = questions[4].choices[2] + " ";
  lower3.appendChild(button3);
  lower4.textContent = questions[4].choices[3] + " ";
  lower4.appendChild(button4);//

  button1.addEventListener("click", displayResults);
  button2.addEventListener("click", displayResults);
  button3.addEventListener("click", displayResults);
  button4.addEventListener("click", displayResults);
  button4.addEventListener("click", function () {
    event.preventDefault();
    incrementCount();
  });

};

function displayResults() {
  event.preventDefault();
  title.textContent = "All done!";
  lower1.textContent = " ";
  lower2.textContent = "Your final score is: " + count;
  lower3.textContent = " ";
  lower4.textContent = " ";
  scores.push(count);
  storeScores();
  console.log(scores);
  console.log(storedScores);
};
 
function timeOut() {
  title.textContent = "Time's up";
  lower1.textContent = " ";
  lower2.textContent = " ";
  lower2.appendChild(a);
  lower3.textContent = " ";
  lower4.textContent = " ";
};

function displayScores() {
for (i = 0; i < scores.length; i++) {
  title.textContent = "Scores:";
  var li = document.createElement("li");
    li.textContent = scores[i];
    lower1.textContent = " ";
    lower1.appendChild(li);
}
lower2.textContent = " ";
lower2.appendChild(a);
lower3.textContent = " ";
lower4.textContent = " ";
};


