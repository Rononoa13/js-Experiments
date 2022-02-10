let message = document.getElementById("input-day")
message.onkeyup = () => {
    document.getElementById("show-me-date").innerHTML = message.value
}
// console.log(message)
// document.getElementById('show-me-date').textContent = message