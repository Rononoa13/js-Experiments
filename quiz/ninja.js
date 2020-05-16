const correctAnswers = ["A", "D", "B"];
const form = document.querySelector(".quiz-form");
// const form = document.getElementsByClassName("quiz-form");
console.log(form)

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value]

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    console.log(score);
});
console.log(correctAnswers);

// function check(event){
//     let score = 0;
//     const userAnswers = [form.q1.value, form.q2.value, form.q3.value]

//     //check answers
//     userAnswers.forEach((answer, index) => {
//         if(answer === correctAnswers[index]){
//             score+=25;
//         }
//     });
//     console.log(score);
// }