// alert("hello")
let count = 0;
let score = 0;
let questionsList = [
  {
    ques: "What is capital of city of Nepal?",
    opt: ["Bhutan", "China", "Kathmandu", "USA"],
    ans: "Bhutan",
  },
  {
    ques:
      "What color is Apple?",
        opt: ["Red/Green", "Magenta", "Blue", "Black"],
    ans: "Red/Green",
  },
  {
    ques:
      "What color is Banana?",
    opt: ["Magenta", "Black", "Pink", "Yellow"],
    ans: "a",
  },
];
//
window.onload = function () {
  this.displayQuestion(count);
}

function displayQuestion(count) {
  for (let i = 0; i < questionsList.length; i++) {
    document.getElementById("quiz-question").innerHTML = `<h2> ${questionsList[count].ques} </h2>`; // console.log(options);

    // let opt = getElementById("quiz-question");
    // opt.innerHTML = ``
    document.getElementById("quiz-options").innerHTML = `<ul>
            <li class="options">
              <input type="radio" name="answer" id="myRadio"/>${questionsList[count].opt[0]}
            </li>
            <li class="options">
              <input type="radio" name="answer" id="myRadio"/>${questionsList[count].opt[1]}
            </li>
            <li class="options">
              <input type="radio" name="answer" id="myRadio"/>${questionsList[count].opt[2]}
            </li>
            <li class="options">
              <input type="radio" name="answer" id="myRadio"/>${questionsList[count].opt[3]}
            </li>
          </ul>`;               
        }
        if (document.getElementById("myRadio").checked == `${questionsList[count].ques}`) {
          score++;
          console.log("Correct");
} else {
  console.log("Incorrect");

        }

}



// for (let i = 0; i < questionsList.length; i++) {

//   console.log(document.getElementById("quiz-question").innerHTML = "<h2>" + questionsList[2].ques + "</h2>");

// }

// // console.log(document.getElementsByClassName(".questions").innerHTML = questionsList);

// function askQuestion() {
//   for (let i = 0; i < questionsList.length; i++) {
//     document.getElementById("quiz-question").innerHTML = "<h2>" + questionsList[i] + "</h2>";
//   }
// }
// askQuestion();

// //Check if Radio button is checked or not!

// console.log(document.getElementById("myRadio").checked);

// // NEXT for navigation
// // function next() {
// //   // alert("Button is clicked.");
// //   document.getElementById("myRadio").checked = function () {
// //     if (document.getElementById("myRadio").checked === true) {
// //       document.getElementById("submit").disabled = true;
// //     }
// //   };

//   // if(x == false)
//   // {
//   //    document.getElementById("submit").disabled = true;
//   // } else {
//   //   document.getElementById("submit").disabled = false;
// //   // }
// // }
function next() {
  ++count;
  displayQuestion(count);
}
// // next();
