const task = document.getElementById("task");
const btn = document.getElementById("btn");

// when you want value of input field ".value"
//input event that fires every time value changes.

task.addEventListener("input", function () {
  if (task.value.length == 0) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
});

btn.addEventListener("click", function () {
  console.log(task.value);
  btn.disabled = true;as
  task.value = " ";
});
