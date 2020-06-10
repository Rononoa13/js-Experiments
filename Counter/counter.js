const count = document.getElementById("count");
// returns Nodelist(3)
const btns = document.querySelectorAll(".btn-");

// set initial count
let counter = 0

count.innerHTML = counter;

btns.forEach(btn => {
    console.log(btn);
    btn.addEventListener("click", function(e) {
        // console.log(e.currentTarget.classList); // Identifies current target for the event. 
        const classOfBtn = e.currentTarget.className; 
        // console.log(typeof(className)); // is of type string
        // console.log("Variable className -> " + classOfBtn);
        if (classOfBtn === "btn- increase") {
            counter++;
        }
        else if (classOfBtn === "btn- decrease") {
            counter--;
        }
        else {
            counter = 0;
        }
        count.textContent = counter;

        if (counter > 0) {
            document.getElementById("count").style.color = "blue";
        } else if (counter < 0)
        {
            document.getElementById("count").style.color = "red";
        }

        // This is another logic
        // if (classOfBtn.contains("increase")) {
        //     counter++;
        // }
        // count.textContent = counter;

    })
});

