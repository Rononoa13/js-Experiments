var score = 0;
var questions = [
  {
    ques:
      "What is capital of country Nepal?\n(a) Bhutan\n\
        (b) China\n(c) Orange",
    ans: "a",
  },
  {
    ques:
      "What color is Apple?\n(a) Red/Green\n\
        (b) Purple\n(c) Orange",
    ans: "a",
  },
  {
    ques:
      "What color is Banana?\n(a) Red/Green\n\
        (b) Purple\n(c) Orange",
    ans: "a",
  },
];

for (var i = 0; i < questions.length; i++) {
  var response = window.prompt(questions[i].ques);
  if (response == questions[i].ans) {
    score++;
    alert("Correct");
  } else {
    alert("Incorrect");
  }
}
alert("You got " + score + "/" + questions.length + " correct");
