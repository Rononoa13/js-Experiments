const task = document.getElementById("task");
const btn = document.getElementById("btn")
// when you want value of input field ".value"


btn.addEventListener("click", function() {
    console.log(task.value);
})