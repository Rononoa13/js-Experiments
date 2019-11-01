/**variables that store references to the 
 * "Enter custom name" text field (customName), 
 * the "Generate random story" button (randomize), 
 * and the <p> element at the bottom of the HTML body 
 * that the story will be copied into (story), 
 * respectively. 
 * */
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)]
}

// 2. RAW text STRINGS

storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
insertX = ["Wily the Goblin",
    "Big Daddy",
    "Father Christmas"];
insertY = ["the soup kitchen",
"Disneyland",
"the White House"];
insertZ = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];

/**Placing the event handler and incomplete function:

Now return to the raw text file.
Copy the code found underneath the heading "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION"
and paste it into the bottom of your main.js file. This:

    Adds a click event listener to the randomize variable so that when the button it 
    represents is clicked, the result() function is run.
    
    Adds a partially-completed result() function definiton to your code.
    For the remainder of the assessment, you'll be filling in lines inside this
    function to complete it and make it work properly.
 */
randomize.addEventListener('click', result);


function result(){
    //so we can create a new random story each time the
    // button is pressed and the function is run.
    // If we made changes directly to storyText , we'd 
    // only be able to generate a new story once.
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);


    if(customName.value !== '') {
        var name = customName.value;
        newStory = newStory.replace('Bob', name);

    }

    if(document.getElementById("uk").checked) {
        var weight = Math.round(300 * 0.07142857142) + ' stone';
        var temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}