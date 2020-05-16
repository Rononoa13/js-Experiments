const quest = document.getElementById("question");
// const choices = new Array(document.getElementsByClassName("choice-text"));
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    ques: "Should you use raster image or vector image.",
    choice1: "Raster",
    choice2: "Vector",
    choice3: "None",
    choice4: "Both",
    ans: 3,
  },
  {
    ques: "What color is Apple?",
    choice1: "Red/Green",
    choice2: "Purple",
    choice3: "Magenta",
    choice4: "Black",
    ans: 1,
  },
  {
    ques: "What color is Banana?",
    choice1: "Pink",
    choice2: "Red",
    choice3: "Blue",
    choice4: "Yellow",
    ans: 4,
  },
];
//When we want to make changes (Adding question)
// startGame = () => {
//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [...questions];
//     console.log(availableQuestions);
//     renderQuestion();
// }
availableQuestions = [...questions];

renderQuestion = () => {
  if (availableQuestions.length === 0) {
    return window.location.assign("./result.html");
  }
  // questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  console.log(questionIndex);
  currentQuestion = availableQuestions[questionIndex];
  console.log(currentQuestion);
  quest.innerHTML = currentQuestion.ques;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptAnswer = true;
};
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptAnswer) return;

    acceptAnswer = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    renderQuestion();
  });
});
renderQuestion();
